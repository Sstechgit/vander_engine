const { validationResult } = require("express-validator");
const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");

const ResponseObj = require("../helper/Response.js");
const { default: mongoose } = require("mongoose");

const leads = require("../models/lead.js");
const fetchClient=asyncHandler(async(req,res)=>{
    const leadArr = await leads.aggregate([
      {
        $lookup: {
          from: "tasks",
          localField: "_id",
          foreignField: "lead",
          as: "task",
        },
      },
      {
        $lookup:{
          from:"users",
          localField:"task.agent",
          foreignField:"_id",
          as:"user"
        }
      },
      {
        $project:{
          "user.password":0,
          "user.refreshToken":0
        }
      },

    ])

    // Group leads by email
    const groupedLeads = leadArr.reduce((acc, lead) => {
      const email = lead.email;
      if (!acc[email]) {
        acc[email] = {
          email: email,
          leads: []
        };
      }
      acc[email].leads.push(lead);
      return acc;
    }, {});

    // Convert to array format
    const groupedLeadsArray = Object.values(groupedLeads);
    return res.send(new ResponseObj(200,"Grouped Leads",groupedLeadsArray,true))

})

module.exports={fetchClient}