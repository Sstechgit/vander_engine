const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  agentKey: String,
  from: String,
  text: String,
  to: String,
  timeStamps: { type: Date, Default: Date.now },
});
const message1 = mongoose.model("Message", messageSchema);

module.exports = message1;
