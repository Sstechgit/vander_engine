//endpoints for user

//login and signup

const { Router } = require("express");
const {
  RegisterUser,
  LoginUser,
  Logout,
  GetAllAgents,
  DeleteAgent,
  EditAgent,
  fetchAgentWithTask,
  TrackAgents,
} = require("../controller/user");
const { check } = require("express-validator");
const ValidateToken = require("../middleware/token.js");
const { validateAdmin } = require("../helper/validateAdmin.js");
const { validateReq } = require("../helper/validateReq.js");

const route = Router();

//Register
route.post(
  "/user",
  [
    check("name", "Name must be of atleast 3 characters").isLength({ min: 3 }),
    check("email", "Email is invalid").isEmail(),
    check("password", "Password must be of atleast 6 characters").isLength({
      min: 6,
    }),
    check("phone", "Phone must be of 10 Numbers").isLength({
      min: 10,max:10
    }),
    check("designation", "Designation must be given").exists(),
    check("designation", "Designation can be an admin or an agent").isIn([
      "Admin",
      "Agent",
      "super"
    ]),
  ],
  RegisterUser
);
route.post(
  "/login",
  [
    check("email", "Email is invalid").isEmail(),
    check("password", "Password must be of atleast 6 characters").isLength({
      min: 6,
    }),
    check("designation", "Designation must be given").exists(),
    check("designation", "Designation can be an admin or an agent").isIn([
      "Admin",
      "Agent",
      "super"
    ]),
  ],
  LoginUser
);
route.get("/logout", ValidateToken, Logout);
route.get("/AllUser/:page/:pageSize", ValidateToken, GetAllAgents);
route.post("/DeleteAgent", ValidateToken, DeleteAgent);
route.put(
  "/Agent",
  ValidateToken,
  [
    check("name", "Name must be of 3 characters").isLength({ min: 3 }),
    check("password", "Password must be of atleast 6 letters").isLength({
      min: 6,
    }),
    check("email", "Email must be valid").isEmail(),
  ],
  EditAgent
);
route.get("/AgentWithTask", ValidateToken, validateAdmin, fetchAgentWithTask);
route.get("/TrackAgent/:page/:pageSize", ValidateToken, validateAdmin, TrackAgents);

module.exports = route;
