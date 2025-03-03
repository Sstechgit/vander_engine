const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");
const ResponseObj = require("../helper/Response");
const user = require("../models/user");

const GetAllAgentsForSuper = asyncHandler(async (req, res) => {
    //fetch all agent people
    
    const agents=await user.find({designation:{$ne:"super"}})
  
    return res.send(
      new ResponseObj(
        200,
        "All Agents Fetched",
        { records: agents},
        true
      )
    );
  });

  const makeMeAs=asyncHandler(async(req,res)=>{
    const email=req.get("email")
    if(!email){
      return res.send(new ErrorResponse(400,"NoEmailSelected"))
    }
    let checkExistence = await user.findOne({ email });
    if (!checkExistence) {
      return res.send(new ErrorResponse(400, "NoEmail", "Email is not Found."));
    }
    const refreshToken = await checkExistence.GenerateRefreshToken();
    const accessToken = await checkExistence.GenerateAccessToken();
    return res.send(
      new ResponseObj(
        200,
        "Logined",
        {
          accessToken,
          refreshToken,
          name: checkExistence.name,
          designation: checkExistence.designation,
        },
        true
      )
    );
  })
  module.exports={GetAllAgentsForSuper,makeMeAs}