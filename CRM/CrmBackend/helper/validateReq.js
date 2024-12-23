const { validationResult } =require("express-validator");
const ErrorResponse = require("./Error");

const validateReq=(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.send(new ErrorResponse(400,"ClientSide",errors.mapped()));
    }
    next()
}
module.exports={validateReq}