const { validationResult } = require("express-validator");
const asyncHandler = require("../helper/asyncHandler");

const ResponseObj = require("../helper/Response");
const { default: mongoose } = require("mongoose");
const ErrorResponse = require("../helper/Error");
const { followups } = require("../models/FollowUp");

const addFollowUp = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }
  const { id, type, title, date, infoId } = req.body;
  const description = req.body?.description || "Add A Description";
  let info = {
    title,
    description,
    date,
    type,
    recordId: id,
    infoId,
    agent: req.user,
  };

  const followup = await followups.create(info);
  return res.send(new ResponseObj(200, "Follow up Added", followup, true));
});

const EditFollowUp = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }
  console.log(req.body)
  const { id, title, date } = req.body;
  const description = req.body?.description || "Add A Description";
  let info = {
    title,
    description,
    date,
  };

  const followupEdit = await followups.findByIdAndUpdate(id, { $set: info });
  return res.send(new ResponseObj(200, "FollowUp Edited", followupEdit, true));
});
const deleteFollowUp = asyncHandler(async (req, res) => {
  const id = req.get("deleteId");

  const followupDelete = await followups.findByIdAndDelete(id);
  return res.send(
    new ResponseObj(200, "Follow Up Deleted", followupDelete, true)
  );
});

const fetchFollowUp = asyncHandler(async (req, res) => {
  const followUp = await followups.aggregate([
    {
      $match: {
        agent: new mongoose.Types.ObjectId(req.user),
        type:"leads"
      },
    },
    // Lookup for tasks
    {
      $lookup: {
        from: "leads",
        localField: "infoId",
        foreignField: "_id",
        as: "detail",
      },
    },
   { $addFields: {
      details: { $arrayElemAt: ["$detail", 0] }, // Create new field 'leadDetail' with the first element of 'details'
    }},
    {
      $project:{
        detail:0
      }
    }
  
    
    
  ]);
  return res.send(new ResponseObj(200, "FollowUp are fetched", followUp, true));
});
const followupByKey = asyncHandler(async (req, res) => {
  let key = req.get("key");
  if (!key) {
    return res.send(
      new ErrorResponse(400, "Key is not present", "provide key")
    );
  }
  let objId = new mongoose.Types.ObjectId(key);
  const notes = await followups.find({ recordId: objId });
  return res.send(new ResponseObj(200, "Followup are fetched", notes, true));
});

module.exports = {
  addFollowUp,
  EditFollowUp,
  fetchFollowUp,
  deleteFollowUp,
  followupByKey,
};
