const db=require("mongoose")
const tokenSchema=new db.Schema({
    accessToken:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Aexpires:{
        type:Date,
        default:Date.now
    },
    Rexpires:{
        type:Date,
        default:Date.now
    },
    tokenObj:{
        type:Object
    }
})

const tokens=db.model("tokens",tokenSchema)
module.exports=tokens