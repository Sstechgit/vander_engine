const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String,
  origin: {
    type: String,
    default: "Vander Engines"
  },
  createdAt: {
    type: String, // Store createdAt as a string to match the required format
    default: () => new Date().toString() // Default value in the required format
  },
  __v: {
    type: Number,
    default: 0
  }
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
