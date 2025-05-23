const { validationResult } = require("express-validator");
const asyncHandler = require("../helper/asyncHandler");
const nodemailer = require("nodemailer");
const Imap = require("imap");
const ResponseObj = require("../helper/Response");
const { default: mongoose } = require("mongoose");
const ErrorResponse = require("../helper/Error");
const emails = require("../models/email");
const conversations = require("../models/conversation");
// Configure Nodemailer
//const from = "Vander Engines Support"; // Fixed value
let smtpEmail = "contactus@vanderengines.com";
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587, // Use 465 for SSL
  secure: false, // Set to true for SSL, false for TLS
  auth: {
    user: smtpEmail,
    pass: "Shobhit@1256",
  },
});
const imap = new Imap({
  user: "contactus@vanderengines.com",
  password: "Shobhit@1256",
  host: "imap.hostinger.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
});
const simpleParser = require("mailparser").simpleParser;

const openInbox = (cb) => {
  imap.openBox("INBOX", false, cb);
};

// Function to fetch unseen emails
const fetchUnreadEmails = () => {
  imap.once("ready", function () {
    openInbox(function (err, box) {
      if (err) throw err;
      
      imap.search(["UNSEEN"], function (err, results) {
        if (err || !results.length) {
          console.log("No new emails.");
          imap.end();
          return;
        }

        const fetcher = imap.fetch(results, { bodies: "" });

        fetcher.on("message", function (msg, seqno) {
          let emailData = {};
          let emailUid = null; // Store UID here
        
          msg.once("attributes", function (attrs) {
            emailUid = attrs.uid; // Assign UID
          });
        
          msg.on("body", function (stream, info) {
            simpleParser(stream, async (err, parsed) => {
              if (err) return console.error("Parsing error:", err);
        
              console.log("Fetched email:", parsed);
        
              if (!parsed.to || !parsed.to.text) {
                console.error("Email parsing failed: 'To' field is missing");
                return;
              }
        
              const emailData = {
                from: parsed.from ? parsed.from.text : "Unknown Sender",
                to: parsed.to ? parsed.to.text : "Unknown Recipient",
                subject: parsed.subject || "No Subject",
                text: parsed.text || "No Body",
                messageId: parsed.messageId || null,
                inReplyTo: parsed.inReplyTo || null,
                references: parsed.references || [],
              };
        
              console.log("Checking for reply:", emailData);
        
              // 🛠 Try fetching the original conversation using inReplyTo or References
              const referenceId = emailData.inReplyTo || (emailData.references.length > 0 ? emailData.references[0] : null);
        
              if (referenceId) {
                const existingConversation = await conversations.findOne({ messageId: referenceId });
        
                if (existingConversation) {
                  console.log("Reply detected! Updating conversation...");
                  await emails.create(emailData);
                  existingConversation.count += 1;
                  await existingConversation.save();
                  
                  if (emailUid) { // Use stored UID
                    imap.addFlags(emailUid, "\\Seen", () => console.log("Marked as read"));
                  }
                } else {
                  console.log("Reply detected but no matching conversation found.");
                }
              } else {
                console.log("New email without a reply reference.");
              }
            });
          });
        });
        

        fetcher.once("end", function () {
          console.log("Done fetching new emails.");
          imap.end();
        });
      });
    });
  });

  imap.connect();
};

// Run every 30 seconds
setInterval(fetchUnreadEmails, 30000);
const sendEmail = asyncHandler(async (req, res) => {
  console.log("hey")
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }
  const { from, to, subject, text ,recordId,type} = req.body;
  const replyTo = req.body.replyTo || null;
  const references = req.body.reference || null;
  let additional = {};
 
  if (replyTo) {
    additional = {
      "In-Reply-To": replyTo,
    };
   
  }
  if (references) {
    additional["References"] = references.join(' ');
  }
  const mailOptions = {
    from: `"${from}" <${smtpEmail}>`,
    to: to,
    subject,
    text: text,
    replyTo: [ smtpEmail], // Multiple reply-to addresses
    headers: {
      ...additional,
    },
  };
  try {
    console.log(mailOptions)
    let sentMail = await transporter.sendMail(mailOptions);
    console.log(sentMail,mailOptions)
   
    console.log(sentMail)
    let id = sentMail.messageId;
    //save email to
    const saveMail = await emails.create({
      messageId: id,
      from,
      to,
      text,
      subject,
      inReplyTo: replyTo,
      references: references || [],
    });
    if(!replyTo){
      //first email
      const saveConversation=await conversations.create({
        messageId:id,
        record:recordId,
        type
      })
    }
    else{
      const FindConversation=await conversations.findOne({messageId:references[0]})
      FindConversation.count+=1;
      await FindConversation.save()
    }
    return res.send(new ResponseObj(200, "Mail Sent", saveMail, true));
  } catch (error) {
    console.log(error);
    return res.send(new ErrorResponse(400, "Mail Not Sent", error));
  }
});
const fetchEmailChain = async (emailId, chain = []) => {
  // console.log(emailId,chain)
  if(!emailId){
    return chain

  }
  try {
    const email = await emails.find({messageId:emailId});
    if (!email) return chain;

    chain.push(email);
    
    // Fetch all replies in a single batch query
    if (email) {
      const replies = await emails.find({ inReplyTo: email[0].messageId });
      // console.log(replies,"re",email)
    
      for (const reply of replies) {
        await fetchEmailChain(reply.messageId, chain);
      }
    }

    return chain;
  } catch (error) {
    console.error('Error fetching email chain:', error);
    throw error;
  }
};
const FetchEmails=asyncHandler(async(req,res)=>{
 
  if (!req.get("record")) {
    return res.send(new ErrorResponse(400, "No record key header"));
  }
  const record=req.get("record");
  const conversation=await conversations.find({record})
  if(!conversation){
    return res.send(new ResponseObj(200,"Email Fetched",[],true))
  }
  // console.log(conversation)
  let emailChat=await fetchEmailChain(conversation[0]?.messageId)
  console.log(conversation)
  if(conversation.length!=0){
    if(conversation[0].seen==false || conversation[0].count!=0){
      conversation[0].seen=true
      conversation[0].count=0
      await conversation[0].save()
    }

  }
 
  return res.send(new ResponseObj(200,"Email Fetched",{emailChat,conversation},true))
})



const CheckEmail=asyncHandler(async(req,res)=>{
  if (!req.get("record")) {
    return res.send(new ErrorResponse(400, "No record key header"));
  }
  const record=req.get("record");
  const conversation=await conversations.find({record})
  return res.send(new ResponseObj(200,"Conversation Fetched",conversation,true))
 
})


module.exports={sendEmail,FetchEmails,CheckEmail}