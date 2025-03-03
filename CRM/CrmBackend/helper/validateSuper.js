const ErrorResponse = require("./Error")

const validateSAdmin=(req,res,next)=>{
    if(req.designation=="super"){
        next()
    }
    else{
        return res.send(new ErrorResponse(400,"Only Super Admin Access","Only Super Admin can access"))
    }
}

module.exports={validateSAdmin}