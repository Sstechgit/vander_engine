const db = require("mongoose");
const orderSchema=new db.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
    },
    part:{
        type:String,
        required:true,
    },
    card_no:{
        type:String,
        required:true
    },
    expiry_date:{
        type:String,
        required:true
    },
    CVV:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    billing_address:{
        type:String,
        required:true
    },
    shipping_address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    variant:{
        type:String,
        
    },
    date:{
        type:String,
        default:Date
    },
    origin: {
        type: String,
        required: true,
      },
})

const orders=db.model("orders",orderSchema)
module.exports={orders}