const { Router } = require("express");
const { check } = require("express-validator");
const ValidateToken = require("../middleware/token");
const { validateReq } = require("../helper/validateReq");
const { sendEmail, FetchEmails, CheckEmail } = require("../controller/email");

const route = Router();

route.post("/email",ValidateToken,[check("from","Sender's Email is not valid").isEmail(),check("to","Reciever's Email is not valid").isEmail(),check("text","Body is not present").isLength({min:1}),check("subject","Subject is not present").isLength({min:1}),check("recordId","Id must be present").exists(),check("type","Type is not present").exists()],validateReq,sendEmail)

route.get("/emails",ValidateToken,FetchEmails)

route.get("/emailCount",ValidateToken,CheckEmail)



module.exports=route