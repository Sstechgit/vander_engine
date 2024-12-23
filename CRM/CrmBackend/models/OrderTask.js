const db=require("mongoose")
const OrderTaskSchema=new db.Schema({
    order:{
        type:db.Schema.Types.ObjectId,
        required:true
    },
    agent:{
        type:db.Schema.Types.ObjectId,
        required:true
    },
    state:{
        type:String,
        enum:["Pending","Completed","Failed"],
        default:"Pending"
    },
    deadline:{
        type:String,
    }
},{timestamps:true})

const ordertasks=db.model("ordertasks",OrderTaskSchema)
module.exports={ordertasks}