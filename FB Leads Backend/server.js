require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");
const cron = require("node-cron");

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

const Lead = require("./models/Lead");
const ProcessedLead = require("./models/ProcessedLead");

// Function to fetch leads from Facebook
const fetchLeads = async () => {
    try {
        console.log("Fetching leads from Facebook...");

        const response = await axios.get(
            `https://graph.facebook.com/v18.0/${process.env.FORM_ID}/leads?access_token=${process.env.PAGE_ACCESS_TOKEN}`
        );

        const leads = response.data.data || [];

        for (let leadData of leads) {
            const fb_lead_id = leadData.id;

            // Check if lead is already processed
            const isProcessed = await ProcessedLead.findOne({ fb_lead_id });
            if (isProcessed) {
                console.log(`Lead ${fb_lead_id} already processed, skipping...`);
                continue;
            }

            // Extract lead fields
            let lead = {};
            leadData.field_data.forEach(field => {
                lead[field.name] = field.values[0];
            });

            // Transform data before saving
            const transformedLead = {
                name: lead.full_name,
                email: lead.email,
                phone: lead.phone_number,
                description: `${lead.year} ${lead.make} ${lead.model} ${lead.part}`,
                origin: "Facebook",
                createdAt: new Date().toString()
            };

            // Save transformed lead
            await Lead.create(transformedLead);

            // Save lead ID to prevent duplicates
            await ProcessedLead.create({ fb_lead_id });

            console.log("New lead saved:", transformedLead);
        }
    } catch (error) {
        console.error("Error fetching leads:", error.response ? error.response.data : error.message);
    }
};


// Route to manually trigger lead fetching
app.get("/fetch-leads", async (req, res) => {
    await fetchLeads();
    res.json({ message: "Leads fetched successfully!" });
});

// Schedule lead fetching every 10 seconds (for testing)
cron.schedule("*/10* * * * *", fetchLeads);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});