const mongoose = require('mongoose');

const ringcentralSchema = new mongoose.Schema({
  to:{
    type:String,
 
  },
  from:{
    type:String,

  },
  count:{
    type:Number,
    default:1,
  },
  seen:{
    type:Boolean,
    default:true
  }
 
});

const ringcentral = mongoose.model('ringcentral', ringcentralSchema);

module.exports = ringcentral;
