const express = require("express");
const notesrouter = express.Router();
const message1 = require("../models/noteschema");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

let io;

const setIo = (socketIoInstance) => {
  io = socketIoInstance;
};

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

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
