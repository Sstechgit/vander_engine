const { Router } = require("express");
const { check } = require("express-validator");
const {
  AddLead,
  fetchLead,
  DeleteLead,
  EditLead,
  ShowAllUnAssignedLead,
  searchByName,
  getSingleLead,
} = require("../controller/lead");
const ValidateToken = require("../middleware/token");
const route = Router();

//endpoints- insert a new lead, delete a lead, edit a lead ,fetch lead
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
  AddLead
);

route.get("/leads/:page/:pageSize", fetchLead);
route.post("/DeleteLead", ValidateToken, DeleteLead);
const phoneNumberPattern = /^(?:\+1\s?)?(?:\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
route.put(
  "/lead",ValidateToken,
  [
    check("name", "Name must be present").isLength({ min: 1 }),
    check("email", "Email must be valid").isEmail(),
    check('phone',"Mobile Number must be valid").matches(phoneNumberPattern),
    check("description", "Description must be given").exists(),
    check("origin", "Origin must be given").exists(),
  ],
  EditLead
);
route.get("/filterLead/:way",ShowAllUnAssignedLead)
route.get("/searchByName",searchByName)
route.get("/getLead",ValidateToken,getSingleLead)


module.exports = route;
