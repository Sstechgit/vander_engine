const express = require('express');
const router = express.Router();
const connectDB = require('../db/index'); // Import the function

// Route to fetch all products
router.get('/', async (req, res) => {
  try {
    console.log("Querying database for year, make, model, variant, and description data");

    // Connect to the database
    const db = connectDB();

    if (!db || typeof db.query !== 'function') {
      return res.status(500).json({ error: 'Database connection is invalid' });
    }

    db.query(
      `
      SELECT DISTINCT 
        TRIM(year) AS year,
        TRIM(make) AS make,
        TRIM(model) AS model,
        TRIM(variant) AS variant,
        product_id,
        TRIM(name) AS name,
        TRIM(Stock) AS Stock,
        TRIM(warranty) AS warranty,
        TRIM(tested_checked) AS tested_checked,
        TRIM(pricing) AS pricing,
        TRIM(image) AS image,
        TRIM(miles) AS miles,
        TRIM(description) AS description
      FROM engine_1
      WHERE 
        TRIM(year) <> '' AND TRIM(year) IS NOT NULL AND
        TRIM(make) <> '' AND TRIM(make) IS NOT NULL AND
        TRIM(model) <> '' AND TRIM(model) IS NOT NULL AND
        TRIM(variant) <> '' AND TRIM(variant) IS NOT NULL
      ORDER BY CAST(year AS UNSIGNED) DESC, make ASC, model ASC, variant ASC
      `,
      (err, results) => {
        if (err) {
          console.error('Error querying the database:', err.message);
          return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }

        const dataMapping = {};

        results.forEach(({ product_id, year, make, model, variant, name, Stock, warranty, tested_checked, pricing, image, miles, description }) => {
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
              product_id,
              name,
              Stock,
              warranty,
              tested_checked,
              pricing,
              image,
              miles,
              description,
            };
          }
        });

        res.json(dataMapping);
      }
    );

  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Route to fetch product by year, make, model, and variant
router.get('/:year/:make/:model/:variant', async (req, res) => {
  const { year, make, model, variant } = req.params;

  try {
    console.log(`Fetching data for ${year}, ${make}, ${model}, ${variant}`);

    const db = connectDB();

    if (!db || typeof db.query !== 'function') {
      return res.status(500).json({ error: 'Database connection is invalid' });
    }

    db.query(
      `
      SELECT 
        product_id,
        TRIM(name) AS name,
        TRIM(Stock) AS Stock,
        TRIM(warranty) AS warranty,
        TRIM(tested_checked) AS tested_checked,
        TRIM(pricing) AS pricing,
        TRIM(image) AS image,
        TRIM(miles) AS miles,
        TRIM(description) AS description
      FROM engine_1
      WHERE 
        year = ? AND make = ? AND model = ? AND variant = ?
      LIMIT 1
      `,
      [year, make, model, variant],
      (err, results) => {
        if (err) {
          console.error('Error querying the database:', err.message);
          return res.status(500).json({ error: 'Failed to fetch data from the database' });
        }

        if (results.length === 0) {
          return res.status(404).json({ error: 'Product not found for the given parameters' });
        }

        res.json(results[0]);
      }
    );

  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
