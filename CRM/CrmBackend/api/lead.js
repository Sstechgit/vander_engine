const { Router } = require("express");
const ValidateToken = require("../middleware/token");
require("dotenv").config();
const { check } = require("express-validator");
const io = require("../index").io; // Assuming io is exported from index.js
const leadController = require("../controller/lead")(io); // Pass io to the exported function

const route = Router();

route.post(
  "/lead",
  [
    check("name", "Name must be present").isLength({ min: 1 }),
    check("email", "Email must be valid").isEmail(),
    check("phone", "Mobile Number must be valid")
      .isNumeric()
      .isLength({ min: 10, max: 10 }),
    check("description", "Description must be given").exists(),
    check("origin", "Origin must be given").exists(),
  ],
  leadController.AddLead // Use the controller function
);

route.get("/leads/:page/:pageSize", leadController.fetchLead);
route.post("/DeleteLead", ValidateToken, leadController.DeleteLead);
route.put(
  "/lead",
  ValidateToken,
  [
    check("name", "Name must be present").isLength({ min: 1 }),
    check("email", "Email must be valid").isEmail(),
    check("phone", "Mobile Number must be valid")
      .isNumeric()
      .isLength({ min: 10, max: 10 }),
    check("description", "Description must be given").exists(),
    check("origin", "Origin must be given").exists(),
  ],
  leadController.EditLead
);

route.get("/filterLead/:way", leadController.ShowAllUnAssignedLead);
route.get("/searchByName", leadController.searchByName);
route.get("/getLead", ValidateToken, leadController.getSingleLead);

module.exports = route;
