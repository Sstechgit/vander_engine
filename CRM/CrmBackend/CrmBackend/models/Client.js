const db=require("mongoose")
const clientSchema=new db.Schema({
    ClientName:{
        type:String,
        required:true,
    },
    ClientEmail:{
        type:String,
        required:true,
    },
    ClientMobile:{
        type:String,
        required:true,
    },
    ClientFrom:{
        type:String,
        required:true
    }
},{timestamps:true})

const clients=db.model("clients",clientSchema)
module.exports=clients