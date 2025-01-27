const ErrorResponse = require("./Error")

const validateAdmin=(req,res,next)=>{
    if(req.designation=="Admin"|| "Agent"){
        next()
    }
    else{
        return res.send(new ErrorResponse(400,"NoAgentAccess","Only Admin can access"))
    }
}

module.exports={validateAdmin}