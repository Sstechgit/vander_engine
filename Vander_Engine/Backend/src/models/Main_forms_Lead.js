const mongoose = require('mongoose');
const { format } = require('date-fns');
const { utcToZonedTime } = require('date-fns-tz');

const leadSchema = new mongoose.Schema({
  part: String,
  make: String,
  model: String,
  year: Number,
  variant: String,
  name: String,
  phone: String,
  email: String,
  message: String,
  agreed: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  formattedDate: {
    type: String
  }
});

// Middleware to store IST date in human-readable format before saving
leadSchema.pre('save', function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date(); // Ensure createdAt has a valid date
  }

  const istTime = utcToZonedTime(this.createdAt, 'Asia/Kolkata'); // Convert UTC to IST
  this.formattedDate = format(istTime, "dd MMM yyyy, hh:mm a"); // Example: "30 Jan 2025, 01:11 PM"

  next();
});

const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead;

