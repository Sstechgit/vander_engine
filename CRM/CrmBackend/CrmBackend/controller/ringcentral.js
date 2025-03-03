const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");
const ResponseObj = require("../helper/Response.js");
const { default: mongoose } = require("mongoose");
const user = require("../models/user.js");
const fs = require("fs").promises;
const path = require("path");
const jwt = require("jsonwebtoken");
//Configure SDK
const RingCentral = require("@ringcentral/sdk");
const ringcentral = require("../models/ringcentral.js");
const tokens = require("../models/Token.js");




async function refreshAccessToken(req, res, next) {
  const agentId = req.user;
  const agent = await user.findById(agentId);

  if (!agent) {
    return res.status(400).json({ error: "User is not recognized" });
  }

  req.from_P = agent.phone;

  // Retrieve the token from the database
  const token = await tokens.findOne({ email: agent.email });
  console.log(token,"refresh")
  if (!token) {
    return res.status(400).json({ error: "ReLogin" });
  }
  console.log("het",token)
  // Check if the refresh token has expired
  if (new Date() >= token.Rexpires) {
    console.log("T");
    return res.status(400).json({ error: "ReLogin" });
  }
  console.log(token);
  let rcsdk = new RingCentral.SDK({
    server: "https://platform.ringcentral.com", // or your RingCentral server URL
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirect,
  });
  let platform = rcsdk.platform();
  if (new Date() >= token.Aexpires) {
    console.log("R");

    // Access token has expired, attempt to refresh
    try {
      await platform.auth().setData(token.tokenObj);

      await platform.refresh();

      // Get new tokens
      const authResponse = await platform.auth().data();
     
      const newAccessToken = authResponse.access_token;
      const newRefreshToken = authResponse.refresh_token;
      const rExpires = authResponse.refresh_token_expires_in;
      const expiresIn = authResponse.expires_in;

      const AccessExpiresAt = new Date(Date.now() + expiresIn * 1000);
      const RefreshExpiresAt = new Date(Date.now() + rExpires * 1000);

      // Update tokens in the database
      await tokens.findOneAndUpdate(
        { email: agent.email },
        {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
          Aexpires: AccessExpiresAt,
          Rexpires: RefreshExpiresAt,
          tokenObj: authResponse,
        },
        { upsert: true }
      );

      // Set new tokens in the SDK
      await platform.auth().setData(authResponse);
    } catch (error) {
      console.log("AuthError:", error);
      delete rcsdk;
      delete platform;
      return res.status(400).json({ error: "ReLogin" });
    }
  } else {
    // Set the current valid tokens
    await platform.auth().setData(token.tokenObj);
  }
  console.log(await platform.auth().data(), "out");
  rcsdk=null
  req.ring = platform;

console.log("hes",rcsdk)
  next();
}
//auth url
const auth = asyncHandler(async (req, res) => {
  
  const authUrl =
    `https://platform.ringcentral.com/restapi/oauth/authorize` +
    `?response_type=code` +
    `&client_id=${encodeURIComponent(process.env.clientId)}` +
    `&redirect_uri=${encodeURIComponent(process.env.redirect)}` +
    `&scope=${encodeURIComponent("ReadAccounts SMS")}`; // Include required scopes
  res.redirect(authUrl);
});
const callback = asyncHandler(async (req, res) => {
  let rcsdk = new RingCentral.SDK({
    server: "https://platform.ringcentral.com", // or your RingCentral server URL
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirect,
  });
  let platform = rcsdk.platform();
  const code = req.query.code;
  try {
    await platform.login({
      code: code,
      redirectUri: process.env.redirect,
      auth: {
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
      },
    });

    const authResponse = await platform.get(
      "/restapi/v1.0/account/~/extension/~"
    );
    const userDetails = await authResponse.json();

    // Extract user email from the response
    const email = userDetails.contact.email;
    const data = await platform.auth().data();
    // Obtain the Auth object from the platform instance
    console.log(userDetails);
    const accessToken = data.access_token; // Access token
    const refreshToken = data.refresh_token; // Refresh token
    const rExpires = data.refresh_token_expires_in;
    const expiresIn = data.expires_in; // Expiration time in seconds

    //save to db
    const AccessExpiresAt = new Date(Date.now() + expiresIn * 1000);
    const RefreshExpiresAt = new Date(Date.now() + rExpires * 1000);

    // Update tokens in the database
    await tokens.findOneAndUpdate(
      { email },
      {
        accessToken,
        refreshToken,
        Aexpires: AccessExpiresAt,
        Rexpires: RefreshExpiresAt,
        tokenObj: data,
      },
      { upsert: true }
    );
    res.send("Authorization successful!");
  } catch (error) {
    console.error("Error during OAuth:", error);
    res.status(500).send("Error during OAuth process.");
  }
  finally{
    rcsdk=null
    platform=null
    console.log(rcsdk,platform)
  }
});

const notify = asyncHandler(async (req, res) => {
  //get
  const agent = await user.findById(req.user);
  if (!agent) {
    return res.send(new ErrorResponse(400, "User is not recognized"));
  }
  const from = agent.phone;
  let to = req.get("to");
  if(!to.startsWith("+1")){
    to="+1"+to
  }
  if (!to) {
    new ErrorResponse(400, "Reciever's identity is not found");
  }
  const conversation = await ringcentral.find({ from, to });
  return res.send(
    new ResponseObj(200, "Conversation Fetched", conversation, true)
  );
});
const fetchChats = asyncHandler(async (req, res) => {
  const from = req.from_P;

  const to = req.get("to");
  console.log(to,"kya");
  if (!to) {
    new ErrorResponse(400, "Reciever's identity is not found");
  }
 
  const conversation = await ringcentral.find({ from, to });
  console.log(conversation,from);
  if (conversation.length === 0) {
    return res.send(new ResponseObj(200, "No Chats", [], true));
  }
  let platform=req.ring
  const filters = {};
  filters.from = from;
  filters.to = to;
  const response = await platform.get(
    "/restapi/v1.0/account/~/extension/~/message-store",
    {
      phoneNumber:to
    }
  );
 
  req.ring=null
  platform=null
  console.log(req.ring,platform)
  if (response.json) {
    if (conversation[0].seen == false) {
      conversation[0].seen = true;
      conversation[0].count = 0;
      await conversation[0].save();
    }

    return res.send(
      new ResponseObj(200, "Chats Fetched", await response.json(), true)
    );
  }
  return res.send(
    new ErrorResponse(300, "An Issue with RingCentral occured", response)
  );
});

const send = asyncHandler(async (req, res) => {
  console.log(req.body,"he")
  const { to, text } = req.body;
  if(!to && !text && !req.file && !req.file.path){
    //nothing is provided
    return res.send(new ErrorResponse(400,"Provide any data to send"))
  }
  const from = req.from_P;

  var FormData = require("form-data");
  let formData = new FormData();
  var bodyParams = {
    from: { phoneNumber: from },
    to: [{ phoneNumber: to }],
    // To send group messaging, add more (max 10 recipients) 'phoneNumber' object. E.g.
    /*
        to: [
           { phoneNumber: "Recipient1-Phone-Number" },
           { phoneNumber: "Recipient2-Phone-Number" }
         ],
        */
    text: text,
  };
  // Attach the bodyParams to multipart form data
  formData.append("json", new Buffer.from(JSON.stringify(bodyParams)), {
    contentType: "application/json",
  });
  // Attach a media file to multipart form data
  if (req.file && req.file.path) {
    formData.append(
      "attachment",
      require("fs").createReadStream(req.file.path)
    );
  }
  let platform=req.ring

  try {

    let endpoint = "/restapi/v1.0/account/~/extension/~/mms";
    var resp = await platform.post(endpoint, formData);
    var jsonObj = await resp.json();
    console.log("MMS sent. Message id: " + jsonObj.id);
    let checked = await check_mms_message_status(platform,jsonObj.id, from, to);
    if (checked == false) {
      return res.send(
        new ErrorResponse(300, "An Issue with RingCentral occured", response)
      );
    }
    return res.send(new ResponseObj(200, "Chat sent", jsonObj, true));
  } catch (e) {
    console.log(e.message);
    return res.send(
      new ErrorResponse(300, "An Issue with RingCentral occured", e.message)
    );
  }
  finally{
    platform=null
    req.ring=null
  }
});
async function check_mms_message_status(platform,messageId, from, to) {
  try {
    let endpoint = `/restapi/v1.0/account/~/extension/~/message-store/${messageId}`;
    let resp = await platform.get(endpoint);
    let jsonObj = await resp.json();
    console.log("Message status: ", jsonObj.messageStatus);
    if (jsonObj.messageStatus == "Queued") {
      await sleep(5000);
      return check_mms_message_status(platform,jsonObj.id, from, to);
    } else if (jsonObj.messageStatus == "Delivered") {
      const save = await ringcentral.findOneAndUpdate(
        { from, to },
        {
          from,
          to,
          seen: true,
          count: 0,
        },
        { upsert: true }
      );
      console.log(save);
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
}

const sleep = async (ms) => {
  await new Promise((r) => setTimeout(r, ms));
};
const mediaFetch = asyncHandler(async (req, res) => {
  let platform=req.ring
  const { url } = req.body;
  const response = await platform.get(url);
 
  req.ring=null
  platform=null
  console.log(response);
  res.setHeader(
    "Content-Type",
    response.headers.get("Content-Type") || "application/octet-stream"
  );
  response.body.pipe(res);
  response.body.on("error", (err) => {
    console.error("Stream error:", err);
    if (!res.headersSent) {
      res
        .status(500)
        .send(new ResponseObj(500, "Error streaming media", null, false));
    }
  });
});
const checkLogin = asyncHandler(async (req, res) => {
  const agentId = req.user;
  const agent = await user.findById(agentId);

  if (!agent) {
    return res.status(400).json({ error: "User is not recognized" });
  }

  // Retrieve the token from the database
  const token = await tokens.findOne({ email: agent.email });

  if (!token) {
    return res.status(400).json({ error: "ReLogin" });
  }

  // Check if the refresh token has expired
  if (new Date() >= token.Rexpires) {
    return res.status(400).json({ error: "ReLogin" });
  }
  console.log("hey");
  return res.status(200).json({ error: "Login" });
});

const recieveMsg=asyncHandler(async(req,res)=>{
  console.log(req.body)
  if (req.headers.hasOwnProperty("validation-token")) {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Validation-Token', req.headers['validation-token']);
    res.statusCode = 200;
    res.end();
  }else if (req.body && req.body.event=="/restapi/v1.0/subscription/~?threshold=432000&interval=86400"){
    await renewSubscription(req.body.subscriptionId)
  } else {
    let body = req.body; // `req.body` will be automatically parsed by `express.json()` middleware
    req.msg=body
    // Check if body contains message data
    if (body && body.body) {
      console.log('Received message data:', body);
      const{to,from}=body.body
      const findDb=await ringcentral.findOne({$or: [
        { from:from.phoneNumber,to:to[0].phoneNumber },
        {  to:from.phoneNumber,from:to[0].phoneNumber  }
      ]})
      if(findDb){
        findDb.seen=false
        findDb.count+=1
        await findDb.save()
      }
    } else {
      console.log('No message data found.');
    }
   


    // Respond to RingCentral that the webhook was received successfully
    res.status(200).send("Recieved");

  }
})
async function fetchMessageDetails(accountId, extensionId, messageId) {
  try {
  let rcsdk = new RingCentral.SDK({
    server: "https://platform.ringcentral.com", // or your RingCentral server URL
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirect,
  });
  let platform = rcsdk.platform();
  let record=await tokens.findById("66d2f7890d81758bcfebf94b")

  await platform.auth().setData(record.tokenObj);
    const response = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`);
    const message = await response.json();
    console.log('Message details:', message);
    const{to,from}=message
    const findDb=await ringcentral.findOne({$or: [
      { from:from.phoneNumber,to:to.phoneNumber },
      {  to:from.phoneNumber,from:to.phoneNumber  }
    ]})
    if(findDb){
      findDb.seen=false
      findDb.count+=1
      await findDb.save()
    }
    // Process the message details
    // For example: save to database, notify users, etc.
  } catch (error) {
    console.error('Error fetching message details:', error.message);
  }
}
async function read_subscriptions(){
  try {
    let rcsdk = new RingCentral.SDK({
      server: "https://platform.ringcentral.com", // or your RingCentral server URL
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
      redirectUri: process.env.redirect,
    });
    let platform = rcsdk.platform();
    let record=await tokens.findOne({email:"vanderengines@gmail.com"})
  
    await platform.auth().setData(record.tokenObj);
    let endpoint = "/restapi/v1.0/subscription"
    var resp = await platform.get(endpoint)
    var jsonObj = await resp.json()
    if (jsonObj.records.length == 0)
      console.log("No subscription.")
    else {
      console.log(jsonObj)
      for (let i of jsonObj.records){
        const subscriptionId = i.id; // Correctly get the subscription ID
        console.log(`Deleting subscription ${subscriptionId}...`);
        console.log(i.eventFilters)
        // Delete each subscription
        await platform.delete(`/restapi/v1.0/subscription/${subscriptionId}`);
        console.log(`Subscription ${subscriptionId} deleted successfully.`);
        
      }
    }
  } catch (e) {
    console.error(e.message);
  }
}

const renewSubscription = async (subscriptionId) => {
  try {
    // Create a new subscription
    const token=await tokens.findOne({email:"vanderengines@gmail.com"})
    let rcsdk = new RingCentral.SDK({
      server: "https://platform.ringcentral.com", // or your RingCentral server URL
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
      redirectUri: process.env.redirect,
    });
    let platform = rcsdk.platform();
    
    console.log(token)
    await platform.auth().setData(token.tokenObj);
  
    console.log(platform)

    const response = await platform.post(`/restapi/v1.0/subscription/${subscriptionId}/renew`);

    // Log the response and return the new subscription data
    console.log('Subscription renewed:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error renewing subscription:', error);
    throw error;
  }
};
module.exports = {
  notify,
  fetchChats,
  auth,
  callback,
  refreshAccessToken,
  send,
  mediaFetch,
  checkLogin,
  recieveMsg
  ,read_subscriptions
};
