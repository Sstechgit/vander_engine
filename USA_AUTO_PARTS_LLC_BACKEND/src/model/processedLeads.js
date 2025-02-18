const mongoose = require("mongoose");

const ProcessedLeadSchema = new mongoose.Schema({
    data_id: { type: Number, unique: true }, // Ensures each lead is stored only once
  }, { timestamps: true });  

module.exports = mongoose.model("ProcessedLeads", ProcessedLeadSchema);