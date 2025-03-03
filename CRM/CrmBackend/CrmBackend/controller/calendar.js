const { validationResult } = require("express-validator");
const asyncHandler = require("../helper/asyncHandler");
const { calendar } = require("../models/calendar");
const ResponseObj = require("../helper/Response");
const { default: mongoose } = require("mongoose");
const ErrorResponse = require("../helper/Error");

const addNote = asyncHandler(async (req, res) => {
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

  const note = await calendar.create(info);
  return res.send(new ResponseObj(200, "Note Added", note, true));
});

const EditNote = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }
  const { id, title, date } = req.body;
  const description = req.body?.description || "Add A Description";
  let info = {
    title,
    description,
    date,
  };

  const note = await calendar.findByIdAndUpdate(id, { $set: info });
  return res.send(new ResponseObj(200, "Note Edited", note, true));
});
const deleteNote = asyncHandler(async (req, res) => {
  const id = req.get("deleteId");

  const note = await calendar.findByIdAndDelete(id);
  return res.send(new ResponseObj(200, "Note Deleted", note, true));
});
//get api
const getByKey = asyncHandler(async (req, res) => {
  
  let key = req.get("key");
  if (!key) {
    return res.send(
      new ErrorResponse(400, "Key is not present", "provide key")
    );
  }
  let objId = new mongoose.Types.ObjectId(key);
  const notes = await calendar.find({ recordId: objId });
  return res.send(new ResponseObj(200, "Notes are fetched", notes, true));
});
const getByDate = asyncHandler(async (req, res) => {
  

  const notes = await calendar.aggregate([
    {
      $match: {
        agent: new mongoose.Types.ObjectId(req.user),
      },
    },
    // Lookup for tasks
    {
      $lookup: {
        from: "leads",
        localField: "infoId",
        foreignField: "_id",
        as: "details_leads",
      },
    },
    // Lookup for ordertasks
    {
      $lookup: {
        from: "orders",
        localField: "infoId",
        foreignField: "_id",
        as: "details_orders",
      },
    },

    // Combine results into a single field
    {
      $addFields: {
        details: {
          $cond: {
            if: { $eq: ["$type", "leads"] },
            then: { $arrayElemAt: ["$details_leads", 0] },
            else: {
              $cond: {
                if: { $eq: ["$type", "orders"] },
                then: { $arrayElemAt: ["$details_orders", 0] },

                else: null,
              },
            },
          },
        },
      },
    },

    // Optionally remove intermediate fields
    {
      $project: {
        details_tasks: 0,
        details_orderTasks: 0,
        details_leads: 0,
        details_orders: 0,
      },
    },
  ]);
  return res.send(new ResponseObj(200, "Notes are fetched", notes, true));
});
function getDate(date) {
 
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day

  return `${year}-${month}-${day}`;
}
const getReminder=asyncHandler(async(req,res)=>{
  const todayDate=getDate(new Date())
  let tommorowD = new Date();
  tommorowD.setDate(tommorowD.getDate() + 1);
  tommorowD=getDate(tommorowD)
  console.log(todayDate,tommorowD)
  const agent=req.user
  const reminders = await calendar.aggregate([
    {
      $match: {
        agent: new mongoose.Types.ObjectId(agent),
        date: { $in: [todayDate, tommorowD] } // Filter documents by today or tomorrow's date
      }
    },
    {
      $group: {
        _id: "$date", // Group by the date field
        count: { $sum: 1 }, // Count the number of reminders per date
        reminders: { $push: "$$ROOT" } // Collect all reminders for that date
      }
    },
    {
      $project: {
        _id: 0, // Exclude the MongoDB _id field
        date: "$_id", // Rename _id field to date
        count: 1, // Include the count field
     
      }
    }
  ])
  return res.send(new ResponseObj(200, "Reminders are fetched", reminders, true));

})

module.exports = { addNote, EditNote, deleteNote, getByKey, getByDate,getReminder };
