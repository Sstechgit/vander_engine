const express = require("express");
const router = express.Router();
const { sendFormEmail } = require("../utils/main-form-mail");

// Middleware to parse JSON data
router.use(express.json());

// POST route to handle form submissions
router.post("/", async (req, res) => {
  console.log("Received request body:", req.body);

  const { name, email, number, website, message } = req.body;

  if (!name || !email || !number) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    await sendFormEmail({ name, email, number, website, message });
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

module.exports = router;