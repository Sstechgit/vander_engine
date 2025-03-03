const ErrorResponse = require("./Error.js")

const asyncHandler=(func)=>{
    return async(req,res)=>{
        try {
            await func(req,res)
        } catch (error) {
            console.log(error)
            return res.status(500).send(new ErrorResponse(500,"Server Side Issue",error))
        }
    }
}

module.exports=asyncHandler