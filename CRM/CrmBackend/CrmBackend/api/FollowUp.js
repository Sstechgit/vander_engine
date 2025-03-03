const { check } = require("express-validator")
const ValidateToken = require("../middleware/token")

const { addFollowUp, EditFollowUp, deleteFollowUp, fetchFollowUp, followupByKey } = require("../controller/FollowUp")

const route=require("express").Router()

route.post("/followup",[check("title","Title must be present").isLength({min:2}),check("type","Type must be mention").exists(),check("date","Date must be present").isDate()],ValidateToken,addFollowUp)

route.put("/followup",[check("title","Title must be present").isLength({min:2}),check("date","Date must be present").isDate()],ValidateToken,EditFollowUp)

route.delete("/followup",ValidateToken,deleteFollowUp)

route.get("/followup",ValidateToken,fetchFollowUp)
route.get("/followupDetails",ValidateToken,followupByKey)


module.exports=route