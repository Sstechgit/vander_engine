const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  messageId:{
    type:String,
    unique:true
  },
  record:{
    type: mongoose.Types.ObjectId
  },
  type:{
    type: String
    
  },
  count:{
    type:Number,
    default:1,
  },
  seen:{
    type:Boolean,
    default:true
  },
  origin:{
    type:String
  }
});

const conversations = mongoose.model('conversations', conversationSchema);

module.exports = conversations;
