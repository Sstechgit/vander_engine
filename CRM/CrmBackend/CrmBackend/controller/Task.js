const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");
const ResponseObj = require("../helper/Response");
const { tasks } = require("../models/Task");
const db = require("mongoose");
const leads = require("../models/lead.js");
const user = require("../models/user.js");
const { ordertasks } = require("../models/OrderTask.js");
const Distribute = asyncHandler(async (req, res) => {
  const { leads, agents, deadline } = req.body;
  let tobeInsert = [];
  console.log(req.body);
  let agent = 0; //0th index
  leads.forEach((leadElement) => {
    tobeInsert = [
      ...tobeInsert,
      {
        lead: new db.Types.ObjectId(leadElement),
        agent: new db.Types.ObjectId(agents[agent]),
        state: "Pending",
        deadline,
      },
    ];
    agent = (agent + 1) % agents.length;
  });
  const insertDoc = await tasks.insertMany(tobeInsert);
  return res.send(
    new ResponseObj(
      200,
      `${tobeInsert.length} Tasks are added`,
      insertDoc,
      true
    )
  );
});
const ReDistribute = asyncHandler(async (req, res) => {
  const { tasksArr, agents, deadline } = req.body;
  let bulkOps = [];
  let agentIndex = 0; // Initialize agent index

  tasksArr.forEach((task) => {
    let taskId = new db.Types.ObjectId(task);
    bulkOps.push({
      updateOne: {
        filter: { _id: taskId },
        update: {
          $set: {
            agent: new db.Types.ObjectId(agents[agentIndex]),
            state: "Pending",
            deadline,
          },
        },
      },
    });
    // Move to the next agent, wrap around if needed
    agentIndex = (agentIndex + 1) % agents.length;
  });
  const updateBulk = await tasks.bulkWrite(bulkOps);

  return res.send(
    new ResponseObj(
      200,
      `${tasksArr.length} Tasks are Updated`,
      updateBulk,
      true
    )
  );
});

const FindTask = asyncHandler(async (req, res) => {
  const lead = new db.Types.ObjectId(req.params.leadId);
  const isPresent = await tasks.aggregate([
    {
      $match: {
        lead: lead,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "agent",
        foreignField: "_id",
        as: "Agent",
      },
    },
    { $unwind: "$Agent" },
    {
      $project: {
        _id: 1,
        name: 1,
        email: 1,
        status: "$state",
        deadline: 1,
      },
    },
  ]);
  if (isPresent.length != 0) {
    return res.send(new ResponseObj(200, "AlreadyAssigned", isPresent, true));
  }
  return res.send(new ErrorResponse(200, "NotAssigned", isPresent, true));
});
const GetAgentTask = asyncHandler(async (req, res) => {
  const agent = new db.Types.ObjectId(req.user);
  let page = Number.parseInt(req.params.page || 1);
  let pageSize = Number.parseInt(req.params.pageSize || 10);
  let skip = (page - 1) * pageSize;
  const leadDoc = await tasks.countDocuments({ agent });
  const orderDoc = await ordertasks.countDocuments({ agent });

  const taskLeads = await tasks
    .aggregate([
      {
        $match: {
          agent,
        },
      },
      {
        $lookup: {
          from: "leads",
          localField: "lead",
          foreignField: "_id",
          as: "leads",
        },
      },
    ])
    .sort({ _id: -1 })
    .skip(skip)
    .limit(pageSize);

  // Paginate combined tasks

  return res.send(
    new ResponseObj(
      200,
      "Tasks fetched",
      { records: taskLeads, total: leadDoc },
      true
    )
  );
});
const changeStatusLead = asyncHandler(async (req, res) => {
  const { status, taskId } = req.body;
  console.log(taskId, "hry");
  const update = await tasks.findByIdAndUpdate(
    new db.Types.ObjectId(taskId),
    { $set: { state: status } },
    { new: true }
  );
  console.log(update);
  return res.send(new ResponseObj(200, "Updated", update, true));
});
const fetchTaskForAdmin = asyncHandler(async (req, res) => {
  let page = req.params.page || 1;
  let pageSize = req.params.pageSize || 10;
  let skip = (page - 1) * pageSize;

  let count = await tasks.countDocuments({});
  let taskData = await tasks
    .aggregate([
      {
        $lookup: {
          from: "leads",
          localField: "lead",
          foreignField: "_id",
          as: "lead",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "agent",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $project: {
          "user.password": 0,
          "user.refreshToken": 0,
        },
      },
    ])
    .sort({ _id: -1 })
    .skip(Number.parseInt(skip))
    .limit(Number.parseInt(pageSize));

  return res.send(
    new ResponseObj(
      200,
      "All Tasks Fetched",
      { records: taskData, total: count },
      true
    )
  );
});

//get only completed leads
const getCompletedLeads = asyncHandler(async (req, res) => {
  const agent = new db.Types.ObjectId(req.user);
  let page = Number.parseInt(req.params.page || 1);
  let pageSize = Number.parseInt(req.params.pageSize || 10);
  let skip = (page - 1) * pageSize;
  const leadDoc = await tasks.countDocuments({ agent, state: "Completed" });

  const taskLeads = await tasks
    .aggregate([
      {
        $match: {
          agent: new db.Types.ObjectId(agent),
          state: "Completed",
        },
      },
      {
        $lookup: {
          from: "leads",
          localField: "lead",
          foreignField: "_id",
          as: "leads",
        },
      },
    ])
    .sort({ _id: -1 })
    .skip(skip)
    .limit(pageSize);
  return res.send(
    new ResponseObj(
      200,
      "All Completed Tasks Fetched",
      { records: taskLeads, total: leadDoc },
      true
    )
  );
});
const getStatus = asyncHandler(async (req, res) => {
  let taskId = req.get("recordId");
  let type = req.get("type");
  console.log(taskId);
  let status;
  console.log(type);
  if (type == "leads") {
    status = await tasks.findById(taskId);
  } else {
    status = await ordertasks.findById(taskId);
  }
  console.log(status);

  return res.send(new ResponseObj(200, "Status Fetched", status?.state, true));
});
const getTaskonStatus = asyncHandler(async (req, res) => {
  let agent = req.get("agent");
  let page = Number.parseInt(req.params.page || 1);
  let pageSize = Number.parseInt(req.params.pageSize || 10);
  let skip = (page - 1) * pageSize;
  let status = req.get("status");

  const taskDoc = await tasks.countDocuments({ agent, state: status });

  const AllTaskBasedOnStatus = await tasks
    .aggregate([
      {
        $match: {
          agent: new db.Types.ObjectId(agent),
          state: status,
        },
      },
      {
        $lookup: {
          from: "leads",
          localField: "lead",
          foreignField: "_id",
          as: "leads",
        },
      },
    ])
    .sort({ _id: -1 })
    .skip(skip)
    .limit(pageSize);

  return res.send(
    new ResponseObj(
      200,
      "Task Based On Status Fetched",
      { records: AllTaskBasedOnStatus, count: taskDoc },
      true
    )
  );
});

const deleteTask = asyncHandler(async (req, res) => {
  const taskId = req.get("taskId");
  if (!taskId) {
    return res.send(new ErrorResponse(400, "Task id is absent"));
  }
  const deleteTaskFromDB = await tasks.findByIdAndDelete(taskId);
  if (!deleteTaskFromDB) {
    return res.send(
      new ErrorResponse(200, "MayBe Task is not located correctly")
    );
  }
  return res.send(new ResponseObj(200, "Task Deleted", deleteTaskFromDB, true));
});
const addYard = asyncHandler(async (req, res) => {
  const { yard, taskId } = req.body;
  const updateTask = await tasks.findByIdAndUpdate(taskId, { $push: { yard } });
  if (!updateTask) {
    return res.send(
      new ErrorResponse(400, "May be Yard is not located correctly")
    );
  }
  return res.send(new ResponseObj(200, "Yard Added", updateTask, true));
});
const editYard = asyncHandler(async (req, res) => {
  const { taskId, newYard, oldYard } = req.body;
  const task = await tasks.findById(taskId);
  if (!task) {
    return res.send(
      new ErrorResponse(400, "May be Yard is not located correctly")
    );
  }
  let arr = task.yard;
  let idx = arr.indexOf(oldYard);
  if (idx == -1) {
    arr.push(newYard);
  } else {
    arr[idx] = newYard;
  }
  task.yard = arr;
  console.log(arr)
  await task.save();
  return res.send(new ResponseObj(200, "Yard Updated", task, true));
});
const deleteYard = asyncHandler(async (req, res) => {
  const { taskId, oldYard } = req.body;
  const task = await tasks.findById(taskId);
  if (!task) {
    return res.send(
      new ErrorResponse(400, "May be Yard is not located correctly")
    );
  }
  let arr = task.yard;
  let newYardsArr = arr.filter((e) => {
    return e != oldYard;
  });

  task.yard = newYardsArr;
  await task.save();
  return res.send(new ResponseObj(200, "Yard Delete", task, true));
});

module.exports = {
  Distribute,
  ReDistribute,
  FindTask,
  GetAgentTask,
  changeStatusLead,
  fetchTaskForAdmin,
  getCompletedLeads,
  getStatus,
  getTaskonStatus,
  deleteTask,
  addYard,
  deleteYard,
  editYard
};
