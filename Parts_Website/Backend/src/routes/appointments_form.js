const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/appointment');
const Appointment = require('../models/Appointment'); // New model for Appointment
const { validateAppointment, handleValidationErrors } = require('../middlewares/appointmentValidation'); // New validation middleware

// POST endpoint to handle appointment form submissions
router.post('/', validateAppointment, handleValidationErrors, async (req, res) => {
    const { fullName, email, phone, carBrand,carModel, modelYear, partNeeded, message } = req.body;

    try {
        // Create a new Appointment document
        const appointment = new Appointment({
            fullName,
            email,
            phone,
            carBrand,
            carModel,
            modelYear,
            partNeeded,
            message,
        });

        // Save the appointment to the database
        await appointment.save();
        await sendEmail({
            fullName,
            email,
            phone,
            carBrand,
            carModel,
            modelYear,
            partNeeded,
            message,
        });

        return res.status(201).json({ message: 'Appointment submitted successfully!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error saving appointment', error: error.message });
    }
});

module.exports = router;
