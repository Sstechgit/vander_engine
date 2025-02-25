const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Full Name of form filler
    email: { type: String, required: true }, // Email of form filler
    phone: { type: String, required: true }, // Phone Number of form filler
    description: { type: String, required: true }, // "Year Make Model Part"
    origin: { type: String, default: "Facebook" }, // Default Origin
    createdAt:{
        type:String,
        default:Date
      }// Lead Created Time
});

module.exports = mongoose.model("Lead", LeadSchema);