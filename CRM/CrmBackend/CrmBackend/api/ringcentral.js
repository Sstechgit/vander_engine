const { check } = require("express-validator")
const ValidateToken = require("../middleware/token")
const { validateReq } = require("../helper/validateReq");
const { sendSms, notify, fetchChats, auth, callback, refreshAccessToken, send, mediaFetch, checkLogin, recieveMsg, read_subscriptions,  } = require("../controller/ringcentral");
const route=require("express").Router()
const path=require("path")
const multer = require("multer");
const ResponseObj = require("../helper/Response");
const RingCentral = require("@ringcentral/sdk");
const tokens = require("../models/Token");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Set the destination directory
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      // Set the file name with the original name and a timestamp
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  // Create the multer instance with the defined storage configuration
  const upload = multer({ storage: storage });

route.post("/sendmsg",ValidateToken,upload.single("file"),[check("to","Reciever's Phone is not correctly provided").isLength({min:10,max:12}),check("text","Text Field must be provided").isLength({min:1})],validateReq,refreshAccessToken,send)
route.get("/notifysms",ValidateToken,notify)
route.get("/chats",ValidateToken,refreshAccessToken,fetchChats)
route.get("/auth",auth)
route.get("/auth/callback",callback)
route.post("/media",ValidateToken,refreshAccessToken,mediaFetch)
route.get("/checkLogin",ValidateToken,checkLogin)
route.post("/webhook",recieveMsg)
// route.get("/read",read_subscriptions)
route.get("/fetcext",read_subscriptions)

// route.get("/ext",fetchSubscriptionsForExtensions)


route.get("/subscribe",async(req,res)=>{
  let rcsdk = new RingCentral.SDK({
    server: "https://platform.ringcentral.com", // or your RingCentral server URL
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirect,
  });

  let platform = rcsdk.platform();
  let record=await tokens.findOne({email:"vanderengines@gmail.com"})

  
  await platform.auth().setData(record.tokenObj);
  const getExtens=await getAllExtensions(platform)

  const filter=generateEventFilters(getExtens.records)
  console.log(filter)
  var bodyParams = {
    eventFilters: filter,
    deliveryMode: {
      transportType: "WebHook",
      address: "https://sstechcrm.com/api/webhook"
    },
    expiresIn: 2592000, // Total subscription duration (e.g., 1 hour)

   
 
  }
  try {
    let endpoint = "/restapi/v1.0/subscription"
    var resp = await platform.post(endpoint, bodyParams)
    var jsonObj = await resp.json()
    console.log (`Subscription Id: ${jsonObj.id}`)
    console.log(jsonObj)
  } catch (e) {
    console.log(e.message);
  }
})

async function getAllExtensions(platform) {
  try {
    const response = await platform.get('/restapi/v1.0/account/~/extension');
    return await response.json();
  } catch (error) {
    console.error('Error fetching extensions:', error.message);
  }
}
function generateEventFilters(extensions) {
  const filters = extensions.map(extension => 
    `/restapi/v1.0/account/773486035/extension/${extension.id}/message-store/instant?type=SMS`
  );
  filters.push('/restapi/v1.0/subscription/~?threshold=432000&interval=86400')
  

  
  return filters;
}
module.exports=route