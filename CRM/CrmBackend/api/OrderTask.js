const { Distribute, ReDistribute, changeStatusOrder, getCompletedOrders } = require("../controller/OrderTask");
const { validateReq } = require("../helper/validateReq");
const express=require("express");
const ValidateToken = require("../middleware/token");
const { validateAdmin } = require("../helper/validateAdmin");
const { check } = require("express-validator");
const route=express.Router()
route.post("/orders/Tasks", ValidateToken, validateAdmin, [
  check("orders", "Orders must be provided")
    .isArray()
    .bail()
    .custom((value) => {
      if (value.length < 1) {
        return false;
      }
      return true;
    }),
  check("agents", "Agents must be provided")
    .isArray()
    .bail()
    .custom((value) => {
      if (value.length < 1) {
        return false;
      }
      return true;
    }),
  check("deadline", "Deadline must be provided").exists(),
  validateReq,
  Distribute,
]);
route.put("/orders/Redistribute", ValidateToken, validateAdmin, [
    check("taskArr", "Tasks must be provided")
      .isArray()
      .bail()
      .custom((value) => {
        if (value.length < 1) {
          return false;
        }
        return true;
      }),
    check("agents", "Agents must be provided")
      .isArray()
      .bail()
      .custom((value) => {
        if (value.length < 1) {
          return false;
        }
        return true;
      }),
    check("deadline", "Deadline must be provided").exists(),
    validateReq,
    ReDistribute,
  ]);
  route.put("/orders/status",ValidateToken,changeStatusOrder)
  route.get("/CompletedOrder/:page/:pageSize",ValidateToken,getCompletedOrders)
module.exports =  route ;
