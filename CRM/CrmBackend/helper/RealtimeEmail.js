const Imap = require("imap");
const fs = require("fs");
const { simpleParser } = require("mailparser");
const leads = require("../models/lead");
const path = require("path");
const { orders } = require("../models/Order");
const emails = require("../models/email");
const conversations = require("../models/conversation");
const mongoose = require("mongoose");

const imap = new Imap({
  user: "info@vanderengines.com",
  password: "Shobhitrastogi@881037",
  host: "imap.hostinger.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
});
const popup = {
  // Matches "Additional Details:" followed by any amount of whitespace and captures everything after it
  additionalDetails: /Additional\s*Details\s*:\s*([\s\S]*)/,

  // Matches "Name:" followed by any text, capturing the text after "Name:"
  name: /Name:\s*(.*)/,

  // Matches "phone:" or "Phone:" followed by one or more digits, capturing the digits
  phone: /(?:phone|Phone):\s*([^\s]+)/,

  // Matches "Email:" followed by any text, capturing the email address
  email: /Email:\s*([^\r\n]+)/,
};
const patternsForForm = {
  from: /From:\s*<([^>]+)>/,
  date: /Date:\s*(.*)/,
  subject: /Subject:\s*(.*)/,
  to: /To:\s*<([^>]+)>/,

  name: /Name:\s*(.*)/,
  phone: /(?:phone|Phone):\s*([^\s]+)/,
  email: /Email:\s*(.*)/,

  model: /(?:model|Model):\s*(.*)/,
  part: /(?:select part|Part):\s*(.*)/,
  year: /(?:Select Year|Year):\s*(\d{4})/,
  make: /(?:Select Make|Make):\s*(.*)/,

  variant: /Variant:\s*(.*)/,
};
const patternsForContact = {
  service: /Service:\s*(.*)/,
  message: /Message:\s*(.*)/,
  from: /From:\s*<([^>]+)>/,
  date: /Date:\s*(.*)/,
  subject: /Subject:\s*(.*)/,
  to: /To:\s*<([^>]+)>/,
  name: /Name:\s*(.*)/,
  phone: /(?:phone|Phone):\s*([^\s]+)/,
};
const patternsForOrder = {
  from: /From:\s*<([^>]+)>/,
  // date: /Date:\s*(.*)/,
  subject: /Subject:\s*(.*)/,
  to: /To:\s*<([^>]+)>/,
  name: /Name:\s*([^\n]+)/,
  phone: /(?:phone|Phone):\s*([^\s]+)/,
  partName: /Part Name:\s*([^\n]+?)\s+Assembly\b/,
  cardNo: /Card No\.: (\d{16})/,
  expDate: /Exp\. Date:\s*(.*)/, // Updated

  cvv: /CVV:\s*(\d+)/,
  amt: /Amt:\s*(\d+)/,

  billingAddress:
    /Billing Address:\s*([\s\S]+?)(?=\n(?:Shipping Address|Additional Details|Email):\s*)/,
  shippingAddress:
    /Shipping Address:\s*([\s\S]+?)(?=\n(?:Additional Details|Email):\s*)/,
  additionalDetails: /Additional Details:\s*([\s\S]+?)(?=\nEmail:|\s*$)/,
  email: /Email:\s*([\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,})/,
};
const WriteData = (data, error) => {
  const filepath = path.join(__dirname, "NotStoredLeads.json");
  let fileData = [];
  if (fs.existsSync(filepath)) {
    fileData = JSON.parse(fs.readFileSync(filepath, "utf8"));
  }
  fileData.push({ data, error });
  fs.writeFileSync(filepath, JSON.stringify(fileData, null, 2), "utf8");
};
function ExtractFormEmailData(body, regexArr) {
  const data = {};

  for (const [key, regex] of Object.entries(regexArr)) {
    const match = body.match(regex);
    if (match) {
      data[key] = match[1].replace(/[\r\n]+/g, " ");
    }
  }
  if (data.service || data.message) {
    data.description = `${data.message || ""} ${data.service || ""}`;
  } else if (!data?.cvv) {
    data.description = `${data.year || ""} ${data.make || ""} ${
      data.model || ""
    } ${data.part || ""} ${data.variant || ""}`;
  } else {
    data.description = `${data.additionalDetails}`;
  }

  return data;
}

// Regex to match the subject line and extract the mobile number
const subjectRegex = /Query Through www\.vanderengines\.com(?: Connect at (\+\d{10,15}))?/;

const StoreFormData = async (mail) => {
  let extractedData = {};
  if (!mail.text.includes("Service") && !mail.text.includes("CVV")) {
    // Simple form contains year, etc.
    extractedData = ExtractFormEmailData(mail.text, patternsForForm);
  } else if (mail.text.includes("Additional Details:") && !mail.text.includes("CVV")) {
    extractedData = ExtractFormEmailData(mail.text, popup);
  } else if (mail.text.includes("Service")) {
    extractedData = ExtractFormEmailData(mail.text, patternsForContact);
  } else {
    extractedData = ExtractFormEmailData(mail.text, patternsForOrder);
  }

  console.log(extractedData);
  console.log(mail.text);

  let origin;
  if (mail.to && mail.to.value && mail.to.value.length > 0) {
    if (mail.to.value[0].address === process.env.LEAD_ORIGIN_1) {
      origin = "Vander Engines";
    } else if (mail.to.value[0].address === process.env.LEAD_ORIGIN_2) {
      origin = "USA AUTO PARTS";
    } else {
      origin = "USA AUTO PARTS LLC";
    }
  } else {
    console.error("mail.to or mail.to.value is undefined or empty");
    return;
  }

  // Extract mobile number from the subject
  const subjectMatch = mail.subject.match(subjectRegex);
  const mobileNumber = subjectMatch && subjectMatch[1] ? subjectMatch[1] : null;

  try {
    if (!extractedData?.cvv) {
      console.log(extractedData);
      const { name, phone, description, date } = extractedData;
      let email = "";
      if (mail.from && mail.from.value && mail.from.value.length > 0) {
        if (mail.from.value[0].address == "info@usaautopartsllc.com") {
          email = extractedData.email;
        } else {
          email = mail.from.value[0].address;
        }
      } else {
        console.error("mail.from is undefined or empty");
        return;
      }

      const LeadRecord = await leads.create({
        name,
        email,
        phone: phone || mobileNumber, // Use the mobile number if the phone is not available
        description,
        origin,
        createdAt: date,
      });
    } else {
      const {
        name,
        email,
        phone,
        partName,
        cardNo,
        expDate,
        cvv,
        amt,
        billingAddress,
        shippingAddress,
        description,
        date,
      } = extractedData;
      const OrderRecord = await orders.create({
        name,
        phone: phone || mobileNumber, // Use the mobile number if the phone is not available
        email,
        description,
        part: partName,
        card_no: cardNo,
        expiry_date: expDate,
        CVV: cvv,
        amount: amt,
        billing_address: billingAddress,
        shipping_address: shippingAddress,
        date: mail.date,
        origin,
      });
    }
  } catch (error) {
    console.log(error);
    WriteData(extractedData, error);
  }
};

function fetchMessageFromEmail() {
  imap.once("ready", function () {
    console.log("IMAP connection ready.");

    imap.openBox("INBOX", false, function (err, box) {
      if (err) throw err;

      console.log("Opened INBOX.");

      // Function to fetch unseen messages
      function fetchUnseenMessages() {
        const searchCriteria = ["UNSEEN"];
        const fetchOptions = { bodies: "", struct: true, header: true };

        imap.search(searchCriteria, function (err, results) {
          if (err) throw err;

          if (results.length === 0) {
            console.log("No unseen messages found.");
            return;
          }

          // Fetch each unseen message
          results.forEach(function (uid, idx) {
            const mailStream = imap.fetch(uid, fetchOptions);

            mailStream.on("message", function (message) {
              message.on("body", function (stream, info) {
                simpleParser(stream, async (err, mail) => {
                  //   console.log("Subject:", mail.subject);
                  //   console.log("Text Body:", mail.text,mail.text.includes("Service"));
                  //   console.log("HTML Body:", mail.html);

                  // console.log(mail.text.mail.messageId, mail.inReplyTo, mail);
                  console.log(
                    mail.from,
                    mail.inReplyTo,
                    mail.subject,
                    mail.references,
                    typeof mail.references,
                    mail.text
                  );
                  if (
                    subjectRegex.test(mail.subject) || 
                    mail.subject.includes("Query Through www.usaauto-parts.com") ||
                    mail.from.value[0].address === "info@usaautopartsllc.com"
                  ) {
                    StoreFormData(mail);
                  }
                  else {
                    if (mail.subject.includes("Re:") && mail.inReplyTo) {
                      //check the in reply to in emails
                      const session = await mongoose.startSession();
                      const isEmailExist = await emails.find({
                        messageId: mail.inReplyTo,
                      });
                      if (isEmailExist) {
                        session.startTransaction();
                        //means it is a conversation part so it must be store now
                        try {
                          const storeReply = await emails.create({
                            from: mail.from.value[0].address,
                            to: mail.to.value[0].address,
                            inReplyTo: mail.inReplyTo,
                            messageId: mail.messageId,
                            receivedAt: mail.date,
                            references:
                              typeof mail.references == "string"
                                ? [mail.references]
                                : mail.references,
                            subject: mail.subject,
                            text: mail.text,
                            html: mail.html,
                          });
                          if (storeReply) {
                            let conversationMessageId =
                              typeof mail.references == "string"
                                ? mail.references
                                : mail.references[0];
                            const converstationRecord =
                              await conversations.findOne({
                                messageId: conversationMessageId,
                              });
                            if (converstationRecord) {
                              converstationRecord.count += 1;
                              converstationRecord.seen = false;
                              converstationRecord.save();
                              await session.commitTransaction();
                            } else {
                              console.log(
                                "conversation not found",
                                "References:",
                                mail.references
                              );
                              await session.abortTransaction();
                              session.endSession();
                            }
                          }
                        } catch (error) {
                          console.log(error, "Mongodb transactions");
                          await session.abortTransaction();
                        } finally {
                          session.endSession();
                        }
                      }
                    }
                  }
                  imap.addFlags(uid, "\\Seen", (err) => {
                    if (err) {
                      console.error("Error marking message as seen:", err);
                    } else {
                      console.log("Message marked as seen.");
                    }
                  });
                });
              });
            });

            mailStream.once("end", function () {
              console.log("Message fetched.");
            });
          });
        });
      }

      // Fetch unseen messages immediately on connection
      fetchUnseenMessages();

      // Set up mail event listener to fetch messages when new mail arrives
      imap.on("mail", function () {
        console.log("New mail event triggered.");
        fetchUnseenMessages();
      });
    });
  });

  imap.once("error", function (err) {
    console.error("IMAP connection error:", err);
  });

  imap.once("end", function () {
    console.log("IMAP connection ended.");
  });

  imap.connect();
}
const FindMails = () => {
  fetchMessageFromEmail();
  // fetchMessageFromEmail('Fwd: Query Through www.vanderengines.com'); auto parts
};
// Start fetching and monitoring the inbox for new messages

module.exports = { FindMails };
