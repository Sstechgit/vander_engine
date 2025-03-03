const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");
const ResponseObj = require("../helper/Response.js");

const { tasks } = require("../models/Task.js");

const addInvoice = asyncHandler(async (req, res) => {
  const { invoiceText, taskId } = req.body;
  const findTask = await tasks.findById(taskId);
  if (!findTask) {
    return res.send(new ErrorResponse(400, "Task is not found for Invoice"));
  }
  findTask.invoice = invoiceText;
  findTask.invoiceSaved = true;
  await findTask.save();
  return res.send(new ResponseObj(200, "Invoice is Saved",findTask,true));
});

const deleteinvoice = asyncHandler(async (req, res) => {
  const taskId = req.get("taskId");
  if (!taskId) {
    return res.send(new ErrorResponse(400, "TaskId must be present"));
  }
  const findTask = await tasks.findById( taskId );
  if (!findTask) {
    return res.send(new ErrorResponse(400, "Task is not found for Invoice"));
  }
  findTask.invoice = undefined;
  findTask.invoiceSaved = false;
  await findTask.save();
  return res.send(new ResponseObj(200, "Invoice is Deleted",findTask,true));
});

const fetchInvoice = asyncHandler(async (req, res) => {
    let page = req.params.page || 1;
    let pageSize = req.params.pageSize || 10;
    let skip = (page - 1) * pageSize;
    console.log(page,pageSize)
    let count = await tasks.countDocuments({invoiceSaved: true,});
  const invoicedTasks = await tasks.aggregate([
    {
      $match: {
        invoiceSaved: true,
      },
    },
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
  ]).sort({ _id: -1 })
  .skip(Number.parseInt(skip))
  .limit(Number.parseInt(pageSize));
  
  return res.send(
    new ResponseObj(
      200,
      "All Invoices Fetched",
      { records: invoicedTasks, total: count },
      true
    )
  );

});


module.exports={addInvoice,deleteinvoice,fetchInvoice}
