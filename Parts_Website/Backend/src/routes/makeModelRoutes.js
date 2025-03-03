const express = require('express');
const router = express.Router();
const connectDB = require('../db/index'); // Import the function

router.get('/', async (req, res) => {
  try {
    console.log("Querying database for make and model");

    // Connect to the database
    const db = connectDB();

    if (!db || typeof db.query !== 'function') {
      return res.status(500).json({ error: 'Database connection is invalid' });
    }

    db.query('SELECT make, model FROM models order by make', (err, results) => {
      if (err) {
        console.error('Error querying the database:', err.message);
        return res.status(500).json({ error: 'Failed to fetch data from the database' });
      }

      const makeModelMapping = {};
      results.forEach(({ make, model }) => {
        if (!makeModelMapping[make]) {
          makeModelMapping[make] = [];
        }
        makeModelMapping[make].push(model);
      });

      res.json(makeModelMapping);
    });
  } catch (err) {
    console.error('Error fetching makes and models:', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
