const express = require('express');
const router = express.Router();
const Lead = require('../models/Main_forms_Lead'); // Model for Lead
const { sendEmail } = require('../utils/mail'); // Import the sendEmail function directly
const { validateLead, handleValidationErrors } = require('../middlewares/validation'); // Validation middleware

// POST endpoint to handle form submission
router.post('/', validateLead, handleValidationErrors, async (req, res) => {
    const { part, make, model, year, variant, name, phone, email, Message, agreed } = req.body;

    // Log the request body to verify
    console.log("Request Body:", req.body);

    try {
        // Create a new Lead document
        const lead = new Lead({
            part,
            make,
            model,
            year,
            variant, // Ensure variant is included here
            name,
            phone,
            email,
            Message,
            agreed,
        });

        // Save the lead to the database
        await lead.save();

        // Send the email with the same data
        await sendEmail({
            part,
            make,
            model,
            year,
            name,
            email,
            phone,
            message: Message,
            agreed,
        });

        return res.status(201).json({ message: 'Lead submitted and email sent successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error saving lead or sending email', error: error.message });
    }
});

module.exports = router;
