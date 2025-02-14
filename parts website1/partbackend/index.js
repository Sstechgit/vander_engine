import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connection.js";
import carrouter from "./Routes/CarDataRouter.js";
import emailrouter from "./Routes/EmailRoutes.js";
import carpartrouter from "./Routes/CarPartsRouter.js";
import partemailrouter from "./Routes/PartEmailRoutes.js";
dotenv.config();
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Use CORS configuration

// Use the router for the "/api" route
app.use("/api", carrouter);
app.use("/api", emailrouter);
app.use("/api", carpartrouter);
app.use("/api", partemailrouter);

const port = process.env.PORT || 6010; // Default to 6000 if no PORT is provided
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
