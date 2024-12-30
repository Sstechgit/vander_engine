const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");
const ResponseObj = require("../helper/Response");
const leads = require("../models/lead");
const user = require("../models/user");
const search = asyncHandler(async (req, res) => {
  const name = req.params.name;
  console.log(req.params)
  if (!(name == "client" || name == "agent")) {
    return res.send(
      new ErrorResponse(400, "Inappropriate Parameters are provided")
    );
  }
  const value = req.get("value");
  if (!value) {
    return res.send(new ErrorResponse(400, "Input is not provided"));
  }
  let valRegex = new RegExp(value, "i");
  if (name == "agent") {
    const agent = await user.aggregate([
      {
        $match: {
          designation: "Agent",
          // Only agents
          name: {
            $regex: valRegex,
          },
        },
      },
      {
        $lookup: {
          from: "tasks",
          localField: "_id",
          foreignField: "agent",
          as: "tasks",
        },
      },
      {
        $addFields: {
          taskStatusCount: {
            $arrayToObject: {
              $map: {
                input: {
                  $setUnion: [
                    {
                      $map: { input: "$tasks", as: "task", in: "$$task.state" },
                    },
                  ],
                },
                as: "state",
                in: {
                  k: "$$state",
                  v: {
                    $size: {
                      $filter: {
                        input: "$tasks",
                        as: "task",
                        cond: { $eq: ["$$task.state", "$$state"] },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        $project: {
          password: 0,
          refreshToken: 0,
          tasks: 0, // Exclude tasks array if not needed in the response
        },
      },
    ]);
    return res.send(
      new ResponseObj(200, "Agents are fetched", { records: agent }, true)
    );
  } else if (name == "client") {
    let LeadsFromDb = await leads.aggregate([
      {
        $match: {
          name: {
            $regex: valRegex,
          },
        },
      },
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
    ]);
    return res.send(
        new ResponseObj(200, "Clients are fetched", { records: LeadsFromDb }, true)
      );
  }

});

module.exports = { search };
