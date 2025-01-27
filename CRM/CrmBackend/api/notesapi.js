const express = require("express");
const notesrouter = express.Router();
const message1 = require("../models/noteschema");

let io;

const setIo = (socketIoInstance) => {
  io = socketIoInstance;
};

notesrouter.get("/messages/:agentkey", async (req, res) => {
  const { agentKey } = req.params;
  const messages = await message1.find({ agentKey }).sort({ timestamp: 1 });
  res.json(messages);
});

notesrouter.post("/messages", async (req, res) => {
  const { agentKey, from, text, to } = req.body;
  const message = new message1({ agentKey, from, text, to });
  await message.save();
  if (io) {
    io.emit("newMessage", {
      ...message.toObject(),
    });
  }
  res.json({ success: true });
});

module.exports = { setIo, router: notesrouter };