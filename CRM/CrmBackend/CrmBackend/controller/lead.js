const { validationResult } = require("express-validator");
const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");

const ResponseObj = require("../helper/Response.js");
const { default: mongoose } = require("mongoose");

const leads = require("../models/lead.js");
const { tasks } = require("../models/Task.js");

// Add A LEAD
const AddLead = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }

  const { name, email, phone, description, origin } = req.body;
  const LeadRecord = await leads.create({
    name,
    email,
    phone,
    description,
    origin,
  });

  console.log("Lead created:", LeadRecord); // ✅ Log in backend for debugging

  return res.send(new ResponseObj(200, "Lead Created", { leadId: LeadRecord._id }, true));
});


//fetch all leads
const fetchLead = asyncHandler(async (req, res) => {
  let page = req.params.page || 1;
  let pageSize = req.params.pageSize || 10;
  let skip = (page - 1) * pageSize;

  let count = await leads.countDocuments({});
  let LeadsFromDb;

  //assigned

  //means show unassigned task

  LeadsFromDb = await leads
    .aggregate([
      {
        $lookup: {
          from: "tasks",
          localField: "_id",
          foreignField: "lead",
          as: "task",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "task.agent",
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
      "All Leads Fetched",
      { records: LeadsFromDb, total: count },
      true
    )
  );
});
//delete lead
const DeleteLead = asyncHandler(async (req, res) => {
  // Check user designation
  if (req.designation !== "Admin") {
    return res.status(403).json(
      new ErrorResponse(403, "NoAgentAccess", "You should be Admin")
    );
  }

  // Check if leads are provided
  if (!req.body?.Leads || !Array.isArray(req.body.Leads) || req.body.Leads.length === 0) {
    return res.status(400).json(
      new ErrorResponse(400, "NoLeadsProvided", "There is no List of Leads")
    );
  }

  const { Leads } = req.body;

  // Convert lead IDs to ObjectId
  const objectIds = Leads.map(id => {
    try {
      return new mongoose.Types.ObjectId(id);
    } catch (error) {
      return null; // Skip invalid ObjectId
    }
  }).filter(id => id !== null);

  if (objectIds.length === 0) {
    return res.status(400).json(
      new ErrorResponse(400, "InvalidLeads", "One or more lead IDs are invalid")
    );
  }

  // Start a session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Delete associated tasks
    await tasks.deleteMany({ lead: { $in: objectIds } })

    // Delete leads
    await leads.deleteMany({ _id: { $in: objectIds } })

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      success: true,
      message: "Leads and their associated tasks have been deleted successfully."
    });

  } catch (error) {
    // Rollback transaction in case of error
    await session.abortTransaction();
    session.endSession();

    console.error(error);
    res.status(500).json(
      new ErrorResponse(500, "ServerError", "An error occurred while deleting leads and tasks")
    );
  }
});
const EditLead = asyncHandler(async (req, res) => {
  if (req.designation != "Admin") {
    return res.send(
      new ErrorResponse(400, "NoAgentAccess", "You should be Admin")
    );
  }
  if (!req.body?.LeadId) {
    return res.send(
      new ErrorResponse(400, "NoLeadProvided", "There is no Lead")
    );
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }
  const { LeadId } = req.body;

  let updateLeadInfo = { ...req.body }; // as name attribute is according to database
  delete updateLeadInfo["LeadId"];
  //hash of password will automatically done on saving

  const result = await leads.findByIdAndUpdate(LeadId, {
    $set: updateLeadInfo,
  });
  return res
    .status(200)
    .send(
      new ResponseObj(
        200,
        "Update",
        `${result.modifiedCount} Lead updated`,
        true
      )
    );
});
const ShowAllUnAssignedLead = asyncHandler(async (req, res) => {
  const way = req.params.way;
  let matchLine = [];
  if (way == 0) {
    //means show unassigned task
    matchLine = [
      {
        $match: {
          task: {
            $size: 0,
          },
        },
      },
    ];
  }
  const LeadWithoutTask = await leads.aggregate([
    {
      $lookup: {
        from: "tasks",
        localField: "_id",
        foreignField: "lead",
        as: "task",
      },
    },
    ...matchLine,
  ]);
  return res.send(
    new ResponseObj(200, "Unassigned Leads", LeadWithoutTask, true)
  );
});
//fetch all unassigned leads send them
const searchByName = asyncHandler(async (req, res) => {
  const name = req.get("name");
  if (!name) {
    return res.send(new ErrorResponse(400, "No name"));
  }
  const regexPattern = new RegExp(name, "i");
  const findVal = await leads.find({ name: { $regex: regexPattern } });
  return res.send(new ResponseObj(200, "leads fetched", findVal, true));
});
const getSingleLead=asyncHandler(async(req,res)=>{
  const leadId=req.get("leadId")
  if(!leadId){
    return res.send(new ErrorResponse(400, "No Lead Id"));

  }
  const lead=await leads.findById(leadId)
  if(!lead){
    return res.send(new ErrorResponse(400, "No Lead Found"));
  }
  return res.send(new ResponseObj(200, "lead fetched", lead, true));

})
module.exports = {
  AddLead,
  fetchLead,
  DeleteLead,
  EditLead,
  ShowAllUnAssignedLead,
  searchByName,
  getSingleLead
};
