const db = require("mongoose");
const leadSchema = new db.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "Nan",
    },
    
    
    origin: {
      type: String,
      required: true,
    },
    createdAt:{
      type:String,
      default:Date
    }
  },
  
);
const leads = db.model("leads", leadSchema);
module.exports = leads;
