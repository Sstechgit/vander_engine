const express = require('express');
const router = express.Router();
const Lead = require('../models/Main_forms_Lead'); // Model for Lead
const { sendEmail } = require('../utils/mail'); // Import the sendEmail function directly
const { validateLead, handleValidationErrors } = require('../middlewares/validation'); // Validation middleware
const { ETsendEmail } = require('../utils/engine_transmission');
const { homesendEmail } = require('../utils/home_page');
const { contact_mid_form } = require('../utils/contact_mid_form');
// POST endpoint to handle form submission
router.post('/', validateLead, handleValidationErrors, async (req, res) => {
    const { part, make, model, year, variant, name, phone, email, message, agreed } = req.body;

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
            message,
            agreed,
        });

        // Save the lead to the database
        
        if (part == "MyformEngine") {
            await ETsendEmail({
                part: "Engine",
                make,
                model,
                year,
                variant,
                name,
                email,
                phone,
                message,
                agreed,
            });
        };
        

        if (part == "MyformTransmission")
        {
            
                await ETsendEmail({
                    part: "Transmission",
                    make,
                    model,
                    year,
                    variant,
                    name,
                    email,
                    variant,
                    phone,
                    message,
                    agreed,
                });
        }

        if ( agreed == "Homepage1") {
            await homesendEmail({
                part,
                make,
                model,
                year,
                variant,
                name,
                email,
                phone,
                message,
                agreed,
            });
        };
        if ( agreed == "Homepage2") {
            await contact_mid_form({
                part,
                make,
                model,
                year,
                variant,
                name,
                email,
                phone,
                message,
                agreed,
            });
        };

        // Send the email with the same data

        return res.status(201).json({ message: 'Lead submitted and email sent successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error saving lead or sending email', error: error.message });
    }
});

module.exports = router;
