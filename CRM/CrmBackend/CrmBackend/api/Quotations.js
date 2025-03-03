const { check } = require("express-validator")
const ValidateToken = require("../middleware/token")
const { validateReq } = require("../helper/validateReq")
const { addQuotations, EditQuotiations, DeleteQuotations, fetchQuotations, AddToVanderEngines } = require("../controller/Quotations")


const route=require("express").Router()

route.post("/quotation",[check("year","Year must be present").isLength({min:4}),check("part","Part must be mention").exists(),check("make","Make must be present").isLength({min:1}),check("model","Model must be present").isLength({min:1}),check("pricing","Pricing must be present").isLength({min:1}),check("stock","Stock Number must be present").isLength({min:1}),check("miles","Miles must be present").isLength({min:1})],ValidateToken,validateReq,addQuotations)

route.put("/quotation",[check("year","Year must be present").isLength({min:4}),check("part","Part must be mention").exists(),check("make","Make must be present").isLength({min:1}),check("model","Model must be present").isLength({min:1}),check("pricing","Pricing must be present").isLength({min:1}),check("stock","Stock Number must be present").isLength({min:1}),check("miles","Miles must be present").isLength({min:1})],ValidateToken,validateReq,EditQuotiations)

route.delete("/quotation",ValidateToken,DeleteQuotations)
route.get("/quotation/:page/:pageSize",ValidateToken,fetchQuotations)
route.post("/AddToVander",ValidateToken,[check("Quotation_id","Quotation Id must be present").exists()],AddToVanderEngines)





module.exports=route