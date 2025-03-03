const express = require("express");
const notesrouter = express.Router();
const message1 = require("../models/noteschema");

let io;

const setIo = (socketIoInstance) => {
  io = socketIoInstance;
};

notesrouter.get("/messages/:agentkey", async (req, res) => {
  const { agentkey } = req.params; // Changed `agentKey` to `agentkey`
  try {
    const messages = await message1.find({ agentKey: agentkey }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching messages" });
  }
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
