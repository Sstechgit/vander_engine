const express = require('express');
const router = express.Router();
const Lead = require('../models/Main_forms_Lead'); // Import Lead model
const { sendEmail } = require('../utils/mail'); // Import email function
const { validateLead, handleValidationErrors } = require('../middlewares/validation'); // Validation middleware
const { ETsendEmail } = require('../utils/engine_transmission');
const { homesendEmail } = require('../utils/home_page');
const { contact_mid_form } = require('../utils/contact_mid_form');

router.post('/', validateLead, handleValidationErrors, async (req, res) => {
    const { part, make, model, year, variant, name, phone, email, message, agreed } = req.body;

    console.log("Request Body:", req.body); // Debugging

    let leadSaved = false;
    let emailSent = false;

    try {
        // Try to save the lead to the database
        const lead = new Lead({
            part,
            make,
            model,
            year,
            variant,
            name,
            phone,
            email,
            message,
            agreed,
        });

        await lead.save();
        leadSaved = true; // Mark lead as saved

    } catch (error) {
        console.error("Database Save Error:", error.message);
    }

    try {
        // Try to send the appropriate email
        if (part === "MyformEngine") {
            await ETsendEmail({ part: "Engine", make, model, year, variant, name, email, phone, message, agreed });
            emailSent = true;
        };

        if (part === "MyformTransmission") {
            await ETsendEmail({ part: "Transmission", make, model, year, variant, name, email, phone, message, agreed });
            emailSent = true;
        };

        if (agreed === "Homepage1") {
            await homesendEmail({ part, make, model, year, variant, name, email, phone, message, agreed });
            emailSent = true;
        };

        if (agreed === "Homepage2") {
            await contact_mid_form({ part, make, model, year, variant, name, email, phone, message, agreed });
            emailSent = true;
        };

    } catch (error) {
        console.error("Email Sending Error:", error.message);
    }

    // Check if either saving or email sending was successful
    if (leadSaved || emailSent) {
        return res.status(201).json({ message: 'Lead submitted successfully!' });
    } else {
        return res.status(500).json({ message: 'Failed to submit lead. Please try again.' });
    }
});

module.exports = router;