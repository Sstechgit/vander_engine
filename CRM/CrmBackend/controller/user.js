const { validationResult } = require("express-validator");
const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");
const user = require("../models/user.js");
const ResponseObj = require("../helper/Response.js");
const { default: mongoose } = require("mongoose");

const RegisterUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }
  //everything is sanitized
  //find email is present in database or not
  const { email, name, password, designation, phone } = req.body;
  let checkExistence = await user.findOne({ email });
  if (checkExistence) {
    return res.send(
      new ErrorResponse(400, "NoUnique", "Email is already registered.")
    );
  }
  if (designation == "Admin" || designation == "super") {
    checkExistence = await user.findOne({ designation });
    if (checkExistence) {
      return res.send(
        new ErrorResponse(400, "AdminPresent", "Email is already registered.")
      );
    }
  }

  //now hash the password- Password will automatically hashed before store using pre listener in schema
  const StoreUser = await user.create({
    name,
    email,
    designation,
    password,
    phone
  });

  return res.send(new ResponseObj(200, "Registered", StoreUser, true));
});

//----------------------GetUser-------------------
const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await user.find();
    console.log("Fetched users:", users); // Log users
    res.status(200).json(new ResponseObj(200, "Users fetched", users, true));
  } catch (error) {
    console.error(error);
    res.status(500).json(new ErrorResponse(500, "ServerError", "Failed to fetch users"));
  }
});


const nodemailer = require("nodemailer");
const otpStore = new Map(); // Temporary OTP storage

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'crmsstech@usaautopartsllc.com',
      pass: 'Crmsstech@9219',
    },
  });

  let mailOptions = {
    from: "crmsstech@usaautopartsllc.com",
    to: "crmsstech@usaautopartsllc.com", // Fixed email where OTPs are sent
    subject: "Your CRM Login OTP",
    text: `OTP Requested for ${email}: ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
};

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password, designation } = req.body;
  let checkExistence = await user.findOne({ email });

  if (!checkExistence) {
    return res.send(new ErrorResponse(400, "NoEmail", "Email is not Found."));
  }

  if (checkExistence.designation !== designation) {
    return res.send(
      new ErrorResponse(400, "WrongDesignation", "Designation is not correct.")
    );
  }

  const isPasswordCorrect = await checkExistence.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.send(
      new ErrorResponse(400, "WrongPassword", "Password is not correct.")
    );
  }

  // Generate OTP & store it
  const otp = generateOTP();
  otpStore.set(email, otp);

  await sendOTP(email, otp);

  return res.send(
    new ResponseObj(200, "OTP Sent", "OTP sent to fixed email", true)
  );
});
// Verify OTP Route
const VerifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if (otpStore.get(email) === otp) {
    otpStore.delete(email);

    // Generate Tokens
    let checkExistence = await user.findOne({ email });
    const accessToken = await checkExistence.GenerateAccessToken();
    const refreshToken = await checkExistence.GenerateRefreshToken();

    return res.send(
      new ResponseObj(200, "Login Successful", {
        userId: checkExistence._id,
        accessToken,
        refreshToken,
        name: checkExistence.name,
        email: checkExistence.email,
        phone: checkExistence.phone,
        designation: checkExistence.designation,
      }, true)
    );
  } else {
    return res.send(new ErrorResponse(400, "InvalidOTP", "Invalid OTP"));
  }
});
const Logout = asyncHandler(async (req, res) => {
  const id = req.user;

  const agent = await user.findById(id);
  agent.login = agent.updatedAt;
  agent.logout = new Date();
  agent.refreshToken = ""
  await agent.save()
  return res.send(new ResponseObj(200, "Logout", "Logout SuccessFull", true));
});
//get all agents
const GetAllAgents = asyncHandler(async (req, res) => {
  //fetch all agent people
  let page = req.params.page;
  let pageSize = Number.parseInt(req.params.pageSize);
  let skip = (page - 1) * pageSize;
  console.log(page, pageSize);
  let count = await user.countDocuments({ designation: "Agent" });
  const AllAgents = await user.aggregate([
    {
      $match: {
        designation: "Agent" //only agents
      }
    },
    {
      $lookup: {
        from: "tasks",
        localField: "_id",
        foreignField: "agent",
        as: "totalTasks",
      },
    },


    {
      $project: {

        password: 0,
        refreshToken: 0
      }
    },
  ]).skip(skip)
    .limit(pageSize)
  console.log(AllAgents)

  return res.send(
    new ResponseObj(
      200,
      "All Agents Fetched",
      { records: AllAgents, total: count },
      true
    )
  );
});
//delete an id
const DeleteAgent = asyncHandler(async (req, res) => {
  if (req.designation != "Admin") {
    return res.send(
      new ErrorResponse(400, "NoAgentAccess", "You should be Admin")
    );
  }
  if (!req.body?.Agents) {
    return res.send(
      new ErrorResponse(400, "NoAgentsProvided", "There is no List of Agents")
    );
  }
  const { Agents } = req.body;
  let objectId = Agents.map((id) => {
    return new mongoose.Types.ObjectId(id);
  });
  const result = await user.deleteMany({ _id: { $in: objectId } });
  return res.send(
    new ResponseObj(
      200,
      "Deleted",
      `${result.deletedCount} Agents are deleted`,
      true
    )
  );
});
const EditAgent = asyncHandler(async (req, res) => {
  if (req.designation != "Admin") {
    return res.send(
      new ErrorResponse(400, "NoAgentAccess", "You should be Admin")
    );
  }
  if (!req.body?.Agent) {
    return res.send(
      new ErrorResponse(400, "NoAgentProvided", "There is no Agent")
    );
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(new ErrorResponse(400, "ClientSide", errors.mapped()));
  }
  const { Agent } = req.body;

  let email = req.body.email;

  let checkEmail = await user.findOne({ email });

  if (checkEmail && checkEmail._id.toString() !== Agent) {
    return res.send(
      new ErrorResponse(400, "NoUnique", "Email is already registered.")
    );
  }
  let updatedAgentInfo = { ...req.body }; // as name attribute is according to database
  delete updatedAgentInfo["Agent"];
  //hash of password will automatically done on saving
  console.log(updatedAgentInfo, req.body, "hry", checkEmail)



  let updated = await user.findByIdAndUpdate(new mongoose.Types.ObjectId(Agent), { $set: { ...updatedAgentInfo } })
  updated.password = updatedAgentInfo.password;
  updated.save()
  return res
    .status(200)
    .send(
      new ResponseObj(
        200,
        "Update",
        `${updated} Agent updated`,
        true
      )
    );
});
//fetch agents with current tasks number
const fetchAgentWithTask = asyncHandler(async (req, res) => {
  const agentsWithTask = await user.aggregate([
    {
      $match: {
        designation: "Agent" //only agents
      }
    },
    {
      $lookup: {
        from: "tasks",
        localField: "_id",
        foreignField: "agent",
        as: "task1",
      },
    },
    {
      $lookup: {
        from: "ordertasks",
        localField: "_id",
        foreignField: "agent",
        as: "task2",
      },
    },
    {
      $addFields: {
        totalTasks: {
          $size: {
            $concatArrays: ["$task1", "$task2"]
          },
        },
      },
    },
    {
      $project: {
        task: 0,
        password: 0,
        refreshToken: 0
      }
    },
  ]);
  console.log(agentsWithTask)
  return res.send(new ResponseObj(200, "agents Fetched", agentsWithTask, true))
});

const TrackAgents = asyncHandler(async (req, res) => {
  try {
    // Fetch page and pageSize from query parameters
    let page = parseInt(req.params.page, 10) || 1;  // Default to page 1 if not provided
    let pageSize = parseInt(req.params.pageSize, 10) || 10;  // Default to page size 10 if not provided

    if (page < 1 || pageSize < 1) {
      return res.status(400).send({
        status: 400,
        message: "Page and pageSize must be positive integers",
        data: null
      });
    }

    let skip = (page - 1) * pageSize;

    // Count total agents
    let count = await user.countDocuments({ designation: "Agent" });

    // Fetch agents with pagination and aggregated task data
    const AllAgents = await user.aggregate([
      {
        $match: {
          designation: "Agent"  // Only agents
        }
      },
      {
        $lookup: {
          from: "tasks",
          localField: "_id",
          foreignField: "agent",
          as: "tasks"
        }
      },
      {
        $addFields: {
          taskStatusCount: {
            $arrayToObject: {
              $map: {
                input: { $setUnion: [{ $map: { input: "$tasks", as: "task", in: "$$task.state" } }] },
                as: "state",
                in: {
                  k: "$$state",
                  v: {
                    $size: {
                      $filter: {
                        input: "$tasks",
                        as: "task",
                        cond: { $eq: ["$$task.state", "$$state"] }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        $project: {
          password: 0,
          refreshToken: 0,
          tasks: 0  // Exclude tasks array if not needed in the response
        }
      }
    ])
      .skip(skip)
      .limit(pageSize);

    console.log(AllAgents);

    // Return the response
    return res.send({
      status: 200,
      message: "All Agents Tracked",
      data: { records: AllAgents, total: count },
      success: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "Internal Server Error",
      data: null
    });
  }
});


module.exports = {
  RegisterUser,
  LoginUser,
  Logout,
  GetAllAgents,
  DeleteAgent,
  EditAgent,
  fetchAgentWithTask,
  TrackAgents,
  LoginUser,
  VerifyOTP,
  getUsers,
};
