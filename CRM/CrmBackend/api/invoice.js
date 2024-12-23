const { check } = require("express-validator")
const ValidateToken = require("../middleware/token")
const { validateReq } = require("../helper/validateReq");
const { addInvoice, deleteinvoice, fetchInvoice } = require("../controller/invoice");
const {validateAdmin}=require("../helper/validateAdmin")
const route=require("express").Router()

route.post("/invoice",ValidateToken,[check("invoiceText","Invoice must be present").isLength({min:1}),check("taskId","Task Id must be given").exists()],validateReq,addInvoice)

route.delete("/invoice",ValidateToken,validateAdmin,deleteinvoice)
route.get("/invoice/:page/:pageSize",ValidateToken,validateAdmin,fetchInvoice)
module.exports=route