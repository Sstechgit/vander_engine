const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  part: String,
  make: String,
  model: String,
  year: Number,
  variant: String, // Add the variant field here
  name: String,
  phone: String,
  email: String,
  Message: String,
  agreed: Boolean,
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;
