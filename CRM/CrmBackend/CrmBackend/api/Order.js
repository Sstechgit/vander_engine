const { Router } = require("express");
const { check } = require("express-validator");
const ValidateToken = require("../middleware/token");
const { fetchOrders, deleteOrder } = require("../controller/Order");
const route = Router();




route.get("/orders/:page/:pageSize",ValidateToken,fetchOrders)

route.delete("/order",ValidateToken,deleteOrder)



module.exports = route;