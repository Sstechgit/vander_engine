const db=require("mongoose")
const FollowUpSchema=new db.Schema({
    agent: {
        type: db.Types.ObjectId,
        required: true,
      },
      recordId: {
        type: db.Types.ObjectId,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      date: {
        type: String,
        default: Date,
      },
      infoId: {
        type: db.Types.ObjectId,
      },
},{timestamps:true})

const followups=db.model("followups",FollowUpSchema)
module.exports={followups}