const mongoose = require("mongoose");

const ProcessedLeadSchema = new mongoose.Schema({
    fb_lead_id: { type: String, unique: true, required: true } // Unique Facebook Lead ID
});

module.exports = mongoose.model("ProcessedfacebookLead", ProcessedLeadSchema);