const { check } = require("express-validator")
const ValidateToken = require("../middleware/token")
const { addNote, EditNote, deleteNote, getByKey, getByDate, getReminder } = require("../controller/calendar")

const route=require("express").Router()

route.post("/note",[check("title","Title must be present").isLength({min:2}),check("type","Type must be mention").exists(),check("date","Date must be present").isDate()],ValidateToken,addNote)

route.put("/note",[check("title","Title must be present").isLength({min:2}),check("date","Date must be present").isDate()],ValidateToken,EditNote)

route.delete("/note",ValidateToken,deleteNote)
route.get("/noteByKey",ValidateToken,getByKey)
route.get("/noteByDate",ValidateToken,getByDate)
route.get("/reminder",ValidateToken,getReminder)



module.exports=route