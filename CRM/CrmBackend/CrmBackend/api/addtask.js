const express = require("express");
const router = express.Router();
const { AddTask } = require("../controller/taskcontroller");

router.post("/addTask", AddTask);

module.exports = router;