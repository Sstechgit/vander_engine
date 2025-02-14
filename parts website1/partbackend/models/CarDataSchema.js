import mongoose from "mongoose";

const carDataSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
  },
  make:{
    type: String,
    required: true,
  },
  model:{
    type: String,
    required: true,
  },
  sr_no:{
    type: String,
    required: true,
  }
});

const CarData = mongoose.model("vehicledata", carDataSchema);

export default CarData;
