const express = require('express');
const router = express.Router();

const { sendEmail } = require('../utils/Course_mail');

// POST route to handle form submissions
router.post('/', async (req, res) => {
  const { fullName, email, phone, confirmPhone, address, consent } = req.body;

  // Validate the phone confirmation
  if (phone !== confirmPhone) {
    return res.status(400).json({ message: 'Phone numbers do not match!' });
  }

  try {
    // Use the sendEmail utility to send the email with the form data
    await sendEmail({
      fullName,
      email,
      phone,
      address,
      consent: consent ? 'Yes' : 'No',
    });

    res.status(200).json({ message: 'Form submitted and email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again.' });
  }
});

module.exports = router;
