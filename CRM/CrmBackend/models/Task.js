const db=require("mongoose")
const TaskSchema=new db.Schema({
    lead:{
        type:db.Schema.Types.ObjectId,
        ref: 'leads', // Assuming you have a User model
        required:true
    },
    agent:{
        type:db.Schema.Types.ObjectId,
        ref: 'users', // Assuming you have a User model
        required:true
    },
    state:{
        type:String,
        default:"Pending"
    },
    deadline:{
        type:String,
        required:true
    },
    yard:{
        type:[String],
      
    },
    invoice:{
        type:String
    },
    invoiceSaved:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const tasks=db.model("tasks",TaskSchema)
module.exports={tasks}