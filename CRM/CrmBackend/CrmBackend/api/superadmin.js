const { Router } = require("express");
const { GetAllAgentsForSuper, makeMeAs } = require("../controller/superadmin");
const ValidateToken = require("../middleware/token");
const { validateSAdmin } = require("../helper/validateSuper");



const route = Router();

//endpoint -1 Fetch All the contact of client
route.get("/S-agents",ValidateToken,validateSAdmin,GetAllAgentsForSuper)
route.get("/S-Identity",ValidateToken,validateSAdmin,makeMeAs)





module.exports=route