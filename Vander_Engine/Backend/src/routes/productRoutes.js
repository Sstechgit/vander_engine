const express = require("express");
const fs = require("fs");
const path = require("path");
const upload = require("../middlewares/upload"); // Multer middleware
const uploadToFTP = require("../utils/ftpUpload"); // FTP utility
const mysql = require("mysql2");
const connectDB = require("../db/index"); // MySQL connection

const router = express.Router();

// POST route for adding products
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const {
      product_id,
      year,
      make,
      model,
      variant,
      part,
      pricing,
      name,
      miles,
      tested_checked,
      warranty,
      shipping,
      Stock,
      description,
    } = req.body;

    const { file } = req; // Image file from the form

    if (!file) {
      return res.status(400).json({ message: "Image upload is required." });
    }

    // Rename file for the remote server
    const remoteFileName = file.filename; // Example: T10000_image.jpg

    // Upload image to FTP server
    const remotePath = await uploadToFTP(file.path, remoteFileName);

    // Delete the local file after successful upload
    fs.unlinkSync(file.path);

    // Construct the image path for the database
    const imagePath = `assets/img/real/${remoteFileName}`;

    // Connect to the database
    const pool = connectDB();
    const connection = await pool.promise().getConnection();

    // SQL query to insert data into the respective table based on 'part'
    let tableName = "";
    if (part.toLowerCase() === "engine") {
      tableName = "engine_1";
    } else if (part.toLowerCase() === "transmission") {
      tableName = "transmission";
    } else {
      return res.status(400).json({ message: "Invalid part type" });
    }

    // SQL query to insert the product into the correct table
    const query = `
      INSERT INTO ${tableName} (product_id, year, make, model, variant, part, pricing, name, miles, tested_checked, warranty, shipping, image, Stock, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      product_id,
      year,
      make,
      model,
      variant,
      part,
      pricing,
      name,
      miles,
      tested_checked,
      warranty,
      shipping,
      imagePath,
      Stock,
      description,
    ];

    await connection.execute(query, values); // Execute the query

    connection.release(); // Release the connection back to the pool

    res.status(201).json({
      message: "Product added successfully",
      product: { product_id, image: imagePath },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;