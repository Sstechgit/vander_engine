const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/mail');

// POST route to handle form submissions
router.post('/', async (req, res) => {
  const { part, make, model, year, name, email, phone, message, agreed } = req.body;

  try {
    await sendEmail({ part, make, model, year, name, email, phone, message, agreed });
    res.status(200).json({ message: 'Quote form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Failed to submit the form.' });
  }
});

module.exports = router;
