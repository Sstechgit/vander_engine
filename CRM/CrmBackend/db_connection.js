const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

// Load DB URL from environment or provide a default fallback
const dbUrl = "mongodb://admin:Sstechcrm%40123@88.222.244.163:27017/VPS_Data_Base";

const connectToDb = async () => {
  if (!dbUrl) {
    console.error("Error: DB environment variable is not set.");
    process.exit(1); // Exit if DB URL is undefined
  }

  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true, // Ensures compatibility with modern MongoDB drivers
      useUnifiedTopology: true, // Enables the new connection management engine
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if MongoDB is unreachable
    });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectToDb;
