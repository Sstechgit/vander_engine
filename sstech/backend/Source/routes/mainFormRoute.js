const express = require('express');
const router = express.Router();
const { sendFormEmail } = require('../utils/main-form-mail');

// POST route to handle form submissions
router.post('/', async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    await sendFormEmail({ name, email, number, message });
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;

