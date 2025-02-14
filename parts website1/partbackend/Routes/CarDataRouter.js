import express from 'express';
const carrouter = express.Router();
import Cardata from '../models/CarDataSchema.js';
// Get all car data
carrouter.get("/cardata", async (req, res) => {
  try {
    const cardata = await Cardata.find();  // Fetch all documents in the 'vehicledata' collection
    if (cardata.length === 0) {
      return res.status(404).json({ message: "No car data found" });

    }
    res.status(200).json(cardata);  // Send the data back as JSON
  } catch (error) {
    console.error("Error fetching car data:", error);
    res.status(422).send("Server error");
  }
});

export default carrouter;
