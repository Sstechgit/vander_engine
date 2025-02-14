import mongoose from "mongoose";
 const carpartschema = new mongoose.Schema({
    part:{
        type: String,
        required: true
    }
 })
 const carpart = mongoose.model("vehiclepart", carpartschema);
 export default carpart;
