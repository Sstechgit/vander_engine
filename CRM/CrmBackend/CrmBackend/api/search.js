const { Router } = require("express");
const { check } = require("express-validator");
const ValidateToken = require("../middleware/token");
const { search } = require("../controller/search");


const route = Router();

//endpoint -1 Fetch All the contact of client
route.get("/search/:name",search)




module.exports=route