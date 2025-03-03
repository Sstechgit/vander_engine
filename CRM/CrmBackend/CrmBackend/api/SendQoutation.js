const express = require("express");
const Qtrouter = express.Router();
const  { SendQuotations, ViewQuotations } = require("../controller/SendQuotation");

Qtrouter.post("/SendQuotations", SendQuotations);
Qtrouter.get("/ViewQuotations", ViewQuotations);


module.exports = Qtrouter;
