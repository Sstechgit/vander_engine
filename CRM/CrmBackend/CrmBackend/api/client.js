const { Router } = require("express");
const { check } = require("express-validator");
const ValidateToken = require("../middleware/token");
const { fetchClient } = require("../controller/client");
const route = Router();

//endpoint -1 Fetch All the contact of client
route.get("/client",fetchClient)




module.exports=route