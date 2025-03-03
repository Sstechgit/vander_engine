const asyncHandler = require("express-async-handler");
const { tasks } = require("../models/Task");

const AddTask = asyncHandler(async (req, res) => {
  const { leadId, agentId, deadline, yard, invoice } = req.body;

  // Validate input
  if (!leadId || !agentId) {
    return res.status(400).json({ success: false, message: "leadId and agentId are required" });
  }

  try {
    const newTask = await tasks.create({
      lead: leadId,
      agent: agentId,
      state: "Pending",
      deadline: deadline || null,
      yard: yard || [],
      invoice: invoice || "",
      invoiceSaved: false,
    });

    console.log("Task Created:", newTask); // ✅ Log task details for debugging

    res.status(201).json({
      success: true,
      message: "Task Created Successfully",
      task: newTask,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = { AddTask };
