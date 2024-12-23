const db = require("mongoose");
const quotationSchema = new db.Schema({
  year: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  part: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
  },
  pricing: {
    type: String,
    required: true,
  },
  miles: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  agent:{
    type:db.Types.ObjectId
  },
  saved:{
    type:Boolean,
    default:false
  }

},{timestamps:true});
const quotations = db.model("quotations", quotationSchema);
module.exports = quotations;
