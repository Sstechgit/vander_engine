const { Router } = require("express");

const { check } = require("express-validator");
const ValidateToken = require("../middleware/token.js");
const { Distribute, ReDistribute, FindTask, GetAgentTask, changeStatusLead, fetchTaskForAdmin, getCompletedLeads, getStatus, getTaskonStatus, deleteTask, deleteYard, addYard, editYard } = require("../controller/Task.js");
const { validateAdmin } = require("../helper/validateAdmin.js");
const { validateReq } = require("../helper/validateReq.js");

const route = Router();

//endpoints- distribute,redistribute,delete
route.post("/Tasks", ValidateToken, validateAdmin, [
  check("leads", "Leads must be provided")
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
    }),check("deadline","Deadline must be provided").exists(),validateReq,Distribute
]);
route.put("/Tasks", ValidateToken, validateAdmin, [
    check("tasksArr", "Tasks must be provided")
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
      }),check("deadline","Deadline must be provided").exists(),validateReq,ReDistribute
  ]);
  route.get("/task/:leadId",ValidateToken,validateAdmin,FindTask)
  route.get("/agent/task/:page/:pageSize",ValidateToken,GetAgentTask)
  route.get("/task/:page/:pageSize",ValidateToken,fetchTaskForAdmin)
  route.get("/CompletedTask/:page/:pageSize",ValidateToken,getCompletedLeads)

  route.get("/status",ValidateToken,getStatus)
  route.put("/agent/task/status",ValidateToken,changeStatusLead)
  route.get("/TaskOnStatus/:page/:pageSize",ValidateToken,getTaskonStatus)
  route.delete("/task",ValidateToken,deleteTask)
  route.post("/yard",ValidateToken,[check("yard","Yard must be mentioned").isLength({min:1}),check("taskId","taskId is not present").exists()],addYard)
  route.put("/yard",ValidateToken,[check("newYard","Yard must be mentioned").isLength({min:1}),check("oldYard","Old Yard value is missing in request").isLength({min:1}),check("taskId","taskId is not present").exists()],editYard)


  route.post("/DeleteYard",ValidateToken,[check("oldYard","Old Yard value is missing in request").isLength({min:1}),check("taskId","taskId is not present").exists()],deleteYard)



module.exports = route;
