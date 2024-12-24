const express = require('express');
const router = express.Router();
const connectDB = require('../db/index'); // Import the function

router.get('/', async (req, res) => {
  try {
    console.log("Querying database for make, model, variant, and description data");

    // Connect to the database
    const db = connectDB();

    if (!db || typeof db.query !== 'function') {
      return res.status(500).json({ error: 'Database connection is invalid' });
    }

    db.query('SELECT make, model, variant, name, Stock, warranty, tested_checked, pricing, image, miles, year, description FROM transmission ORDER BY year, make, model', (err, results) => {
      if (err) {
        console.error('Error querying the database:', err.message);
        return res.status(500).json({ error: 'Failed to fetch data from the database' });
      }
      
      const dataMapping = {}; // This will hold the nested structure
      
      results.forEach(({ year, make, model, variant, name, Stock, warranty, tested_checked, pricing, image, miles, description }) => {
        // Initialize nested structure with year > make > model > variant
        if (!dataMapping[year]) {
          dataMapping[year] = {};
        }
        if (!dataMapping[year][make]) {
          dataMapping[year][make] = {};
        }
        if (!dataMapping[year][make][model]) {
          dataMapping[year][make][model] = {};
        }
        if (!dataMapping[year][make][model][variant]) {
          dataMapping[year][make][model][variant] = {
            name,
            Stock,
            warranty,
            tested_checked,
            pricing,
            image,
            miles,
            description,  // Added description to the structure
          };
        }
      });
      
      res.json(dataMapping);
    });
      
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
