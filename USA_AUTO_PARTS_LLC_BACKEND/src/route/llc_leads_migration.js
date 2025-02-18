const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("../dbconnect/mysqldb");
const Lead = require("../model/lead");
const ProcessedLead = require("../model/processedLeads"); // Import ProcessedLead model

const router = express.Router();
const mysqlConnection = connectDB();

const migrateLeads = async () => {
  try {
    console.log("Fetching new leads...");
    const query = "SELECT * FROM infinytech_cf7_data_entry ORDER BY data_id, id";

    mysqlConnection.query(query, async (err, results) => {
      if (err) {
        console.error("MySQL Query Error:", err);
        return;
      }

      if (results.length === 0) {
        console.log("No new leads found.");
        return;
      }

      // ✅ Fetch processed data_id values from MongoDB
      const processedLeads = await ProcessedLead.find({}, { data_id: 1 }).lean();
      const processedDataIds = new Set(processedLeads.map(lead => lead.data_id));

      const groupedLeads = {};
      results.forEach((row) => {
        if (processedDataIds.has(row.data_id)) return; // ✅ Skip already processed leads

        if (!groupedLeads[row.data_id]) {
          groupedLeads[row.data_id] = {
            data_id: row.data_id,
            name: "",
            email: "",
            phone: "",
            description: "",
            origin: "USA AUTO PARTS LLC",
            createdAt: new Date().toString(),
            fields: {} 
          };
        }

        if (row.name === "text-363") {
          groupedLeads[row.data_id].fields["text-363"] = row.value;
        } else if (row.name.includes("email")) {
          groupedLeads[row.data_id].email = row.value;
        } else if (row.name.includes("tel")) {
          groupedLeads[row.data_id].phone = row.value;
        } else if (row.name.includes("text")) {
          groupedLeads[row.data_id].name = row.value;
        } else if (row.name.includes("textarea")) {
          groupedLeads[row.data_id].description = row.value;
        } else if (row.name.includes("menu")) {
          groupedLeads[row.data_id].fields[row.name] = row.value;
        }
      });

      Object.values(groupedLeads).forEach((lead) => {
        const { fields } = lead;
        lead.description = [
          fields["menu-512"] || "",
          fields["menu-914"] || "",
          fields["text-363"] || "[Missing text-363]",
          fields["menu-997"] || ""
        ].filter(Boolean).join(" ");
      });

      const leadDocs = Object.values(groupedLeads);

      if (leadDocs.length > 0) {
        // ✅ Double-check processed leads before inserting
        const filteredLeads = leadDocs.filter(lead => !processedDataIds.has(lead.data_id));

        if (filteredLeads.length > 0) {
          await Lead.insertMany(filteredLeads, { ordered: false })
            .then(() => console.log(`✅ Leads migrated successfully: ${filteredLeads.length}`))
            .catch(err => console.log("Duplicate entries ignored"));

          // ✅ Store newly added data_id values in ProcessedLeads
          const processedEntries = filteredLeads.map(lead => ({ data_id: lead.data_id }));
          await ProcessedLead.insertMany(processedEntries, { ordered: false })
            .then(() => console.log("✅ Processed leads stored successfully"))
            .catch(err => console.log("Processed entries ignored or duplicate detected"));
        } else {
          console.log("🚀 No new leads to insert (already processed).");
        }
      }
    });
  } catch (error) {
    console.error("Migration Error:", error);
  }
};

// Run migration every 10 seconds
setInterval(migrateLeads, 10 * 1000);

module.exports = router;