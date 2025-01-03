const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  carBrand: { type: String, required: true },
  modelYear: { type: String, required: true },
  partNeeded: { type: String, required: true },
  message: { type: String, default: '' }, // Optional message
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
