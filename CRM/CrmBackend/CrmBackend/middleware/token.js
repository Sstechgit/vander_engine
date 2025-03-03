
const jwt=require("jsonwebtoken")
const ErrorResponse = require("../helper/Error")
const ValidateToken=(req,res,next)=>{
    const bearerToken=req.header('Authorization')
    console.log(req.body,"hey")
    if(!bearerToken){
        return res.send(new ErrorResponse(400,"NoToken","You are not accessed to this Functionality"))
    }
    let token=bearerToken.split("Bearer ")[1];
   
    try {
        let payload=jwt.verify(token,process.env.ACCESS_SECRET_KEY)
        req.user=payload.id;
        req.designation=payload.designation;
        next()
    } catch (error) {
        return res.send(new ErrorResponse(400,"NoToken","You are not accessed to this Functionality"))
    }
}

module.exports=ValidateToken