const express = require("express");
const router = express.Router();
const connectDB = require("../db/index"); // Import the function

router.post("/", async (req, res) => {
  console.log("Incoming request body:", req.body);

  const { description } = req.body;
  
  if (!description) {
    console.error("Missing description");
    return res.status(400).json({ success: false, message: "Description is required" });
  }

  // Trim and split the description properly
  const descParts = description.trim().split(/\s+/); // Splitting by spaces and removing extra spaces
  console.log("Parsed parts:", descParts);

  if (descParts.length < 4) { // Ensuring enough parts exist
    return res.status(400).json({ success: false, message: "Invalid description format" });
  }
  
  const year = descParts[0];
  const make = descParts[1];
  const model = descParts[2];

  // Fix: Ensure the last non-empty word is taken as the part
  const part = descParts.filter(word => word.trim() !== "").pop().toLowerCase();
  
  console.log(`Extracted - Year: ${year}, Make: ${make}, Model: ${model}, Part: ${part}`);

  let tableName = "";
  if (part.includes("engine")) {
    tableName = "engine_1";
  } else if (part.includes("transmission")) {
    tableName = "transmission";
  } else {
    return res.status(400).json({ success: false, message: "Invalid part type" });
  }

  try {
    console.log(`Querying database for ${tableName}...`);
    const db = connectDB();
    
    if (!db || typeof db.query !== "function") {
      console.error("Invalid DB connection");
      return res.status(500).json({ error: "Database connection is invalid" });
    }

    db.query(
      `SELECT * FROM ${tableName} WHERE year = ? AND make = ? AND model = ?`,
      [year, make, model],
      (err, results) => {
        if (err) {
          console.error("Error querying the database:", err.message);
          return res.status(500).json({ error: "Failed to fetch data from the database" });
        }

        if (results.length === 0) {
          return res.status(404).json({ success: false, message: "No product found" });
        }

        console.log("Database query successful:", results);
        res.json({ success: true, data: results });
      }
    );
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;
