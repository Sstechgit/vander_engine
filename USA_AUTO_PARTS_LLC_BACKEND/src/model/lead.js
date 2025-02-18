const db = require("mongoose");
const leadSchema = new db.Schema(
  {
      data_id: {  // ✅ Added to match MySQL's `data_id`
        type: Number,
        required: true,
        unique: true,  // Ensures no duplicates
      },
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