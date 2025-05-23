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
  password: "Shobhit@1256",
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

  // Determine data type
  extractedData = ExtractFormEmailData(mail.text, patternsForForm);

  console.log("Extracted Data:", extractedData);

  // Identify origin based on recipient address
  let origin = "";
  if (mail.to?.value?.length > 0) {
    const recipientAddress = mail.to.value[0].address;
    if (recipientAddress === process.env.LEAD_ORIGIN_1) {
      origin = "Vander Engines";
    } else if (recipientAddress === process.env.LEAD_ORIGIN_2) {
      origin = "USA AUTO PARTS";
    } else {
      origin = "USA AUTO PARTS LLC";
    }
  } else {
    console.error("Recipient address missing in the email.");
    return;
  }

  // Use Reply-To or From address for email
  let email = "";
  if (mail.replyTo?.value?.length > 0) {
    email = mail.replyTo.value[0].address; // Prioritize Reply-To
  } else if (mail.from?.value?.length > 0) {
    email = mail.from.value[0].address; // Fallback to From
  } else {
    console.error("No valid email found in Reply-To or From.");
    return;
  }

  try {
    const { name, phone, description, year, make, model, part } = extractedData;

    // Check if a lead with the same phone exists
    const existingLead = await leads.findOne({ phone });

    if (false) {
      // Update lead if email differs
      if (existingLead.email !== email) {
        existingLead.email = email;
        existingLead.origin = origin;
        await existingLead.save();
        console.log("Existing lead updated with new email.");
      } else {
        console.log("Lead already exists with the same email. Skipping save.");
      }
    } else {
      // Create new lead
      await leads.create({
        name,
        email,
        phone,
        description,
        origin,
        createdAt: mail.date || new Date(),
      });
      console.log("New lead created successfully.");
    }
  } catch (error) {
    console.error("Error saving form data:", error);
  }
};

const { exec } = require("child_process");
const MAX_RETRIES = 5;
let retryCount = 0;
const PM2_PROCESS_ID = 6; // Change this if your PM2 process ID is different

function fetchMessageFromEmail() {
  function connectIMAP() {
    console.log(`Attempting IMAP connection (Retry ${retryCount}/${MAX_RETRIES})`);

    imap.once("ready", function () {
      console.log("IMAP connection ready.");
      retryCount = 0; // Reset retry count on successful connection

      imap.openBox("INBOX", false, function (err, box) {
        if (err) {
          console.error("Error opening inbox:", err);
          handleIMAPError();
          return;
        }

        console.log("Opened INBOX.");

        function fetchUnseenMessages() {
          const searchCriteria = ["UNSEEN"];
          const fetchOptions = { bodies: "", struct: true, header: true };

          imap.search(searchCriteria, function (err, results) {
            if (err) {
              console.error("Search error:", err);
              return;
            }

            if (results.length === 0) {
              console.log("No unseen messages found.");
              return;
            }

            results.forEach(function (uid) {
              const mailStream = imap.fetch(uid, fetchOptions);

              mailStream.on("message", function (message) {
                message.on("body", function (stream, info) {
                  simpleParser(stream, async (err, mail) => {
                    if (err) {
                      console.error("Error parsing email:", err);
                      return;
                    }

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
                    } else {
                      if (mail.subject.includes("Re:") && mail.inReplyTo) {
                        const session = await mongoose.startSession();
                        const isEmailExist = await emails.find({
                          messageId: mail.inReplyTo,
                        });

                        if (isEmailExist) {
                          session.startTransaction();
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
                              const conversationRecord = await conversations.findOne({
                                messageId: conversationMessageId,
                              });

                              if (conversationRecord) {
                                conversationRecord.count += 1;
                                conversationRecord.seen = false;
                                await conversationRecord.save();
                                await session.commitTransaction();
                              } else {
                                console.log("Conversation not found:", mail.references);
                                await session.abortTransaction();
                              }
                            }
                          } catch (error) {
                            console.error("MongoDB transaction error:", error);
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

        // Fetch unseen messages immediately
        fetchUnseenMessages();

        // Listen for new mail
        imap.on("mail", function () {
          console.log("New mail event triggered.");
          //fetchUnseenMessages();
        });
      });
    });

    imap.once("error", function (err) {
      console.error("IMAP connection error:", err);
      handleIMAPError();
    });

    imap.once("end", function () {
      console.log("IMAP connection ended.");
      handleIMAPError();
    });

    //imap.connect();
  }

  function handleIMAPError() {
    if (retryCount < MAX_RETRIES) {
      retryCount++;
      console.log(`Retrying IMAP connection in 5 seconds... (Attempt ${retryCount})`);
      setTimeout(connectIMAP, 5000);
    } else {
      console.error("Max retries reached. Restarting PM2 process...");
      restartPM2Process();
    }
  }

  function restartPM2Process() {
    console.log(`Restarting PM2 process ID: ${PM2_PROCESS_ID}`);
    exec(`pm2 restart ${PM2_PROCESS_ID}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error restarting PM2 process: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`PM2 Restart Stderr: ${stderr}`);
        return;
      }
      console.log(`PM2 Restart Output: ${stdout}`);
    });
  }

  //connectIMAP();
}

const FindMails = () => {
  fetchMessageFromEmail();
};

module.exports = { FindMails };