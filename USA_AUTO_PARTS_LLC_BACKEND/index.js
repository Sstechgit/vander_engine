require("dotenv").config();
const express = require("express");
const cors = require("cors");
const leadMigration = require("./src/route/llc_leads_migration"); // Adjust path as needed
const app = express();
app.use(express.json());
const connectToDb = require("./src/dbconnect/db_connection");
connectToDb()
const connectToDb2 = require("./src/dbconnect/mysqldb");
connectToDb2()
app.use(leadMigration);
app.use(cors());
// Sample route
app.get("/", (req, res) => {
    res.send("Node.js backend is running!");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));