import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};

export default connectDB;
