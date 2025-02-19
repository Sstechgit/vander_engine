const { body, validationResult } = require('express-validator');

const validateLead = [
  // Add more validation as needed
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation errors:', errors.array()); // Log validation errors
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateLead, handleValidationErrors };
