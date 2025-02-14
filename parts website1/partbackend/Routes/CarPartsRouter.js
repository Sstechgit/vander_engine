import express from "express";
const carpartrouter = express.Router();
import carpart from "../models/CarPartsSchema.js";
carpartrouter.get("/carpart", async (req, res) => {
  try {
    const Carpart = await carpart.find(); // Fetch all documents in the 'vehicledata' collection
    if (Carpart.length === 0) {
      return res.status(404).json({ message: "No car data found" });
    }
    res.status(200).json(Carpart); // Send the data back as JSON
  } catch (error) {
    console.error("Error fetching car data:", error);
    res.status(422).send("Server error");
  }
});

export default carpartrouter;
