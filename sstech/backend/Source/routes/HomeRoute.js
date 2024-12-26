const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/mail');

// POST route to handle form submissions
router.post('/', async (req, res) => {
  console.log("Request Body:", req.body);
  const { name, email, phone, service, website, message } = req.body;

  if (!name || !email || !phone || !service || !website || !message) {
    return res.status(400).json({ message: "Missing required fields!" });
  }

  try {
    await sendEmail({ name, email, phone, service, website, message });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});


module.exports = router;

