const { body, validationResult } = require('express-validator');

// Validation rules for the appointment form
const validateAppointment = [
  body('email').isEmail().withMessage('Invalid email'),
  body('fullName').notEmpty().withMessage('Full Name is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('carBrand').notEmpty().withMessage('Car Brand is required'),
  body('modelYear').notEmpty().withMessage('Model/Year is required'),
  body('partNeeded').notEmpty().withMessage('Part Needed is required'),
];

// Error handling middleware for validation
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateAppointment, handleValidationErrors };
