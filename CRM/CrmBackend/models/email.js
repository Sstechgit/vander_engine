const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  messageId: { type: String, required: true }, // Unique identifier for each email -generated when we send
  inReplyTo: String, // ID of the email being replied to
  references: [String], // IDs of previous emails in the thread
  from: String,
  to: String,
  subject: String,
  text: String,
  html: {
    type:String,
    default:""
  },
  receivedAt: { type: Date, default: Date.now },
  // threadId: String Custom identifier to group related emails
});
emailSchema.index({ inReplyTo: 1 });

const emails = mongoose.model('emails', emailSchema);


module.exports = emails;
