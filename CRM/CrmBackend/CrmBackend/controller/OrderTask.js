const asyncHandler = require("../helper/asyncHandler");
const ResponseObj = require("../helper/Response");
const { ordertasks } = require("../models/OrderTask");
const db=require("mongoose");
const Distribute = asyncHandler(async (req, res) => {
  const { orders, agents, deadline } = req.body;
  let tobeInsert = [];
  console.log(req.body);
  let agent = 0; //0th index
  orders.forEach((order) => {
    tobeInsert = [
      ...tobeInsert,
      {
        order: new db.Types.ObjectId(order),
        agent: new db.Types.ObjectId(agents[agent]),
        state: "Pending",
        deadline,
      },
    ];
    agent = (agent + 1) % agents.length;
  });
  const insertDoc = await ordertasks.insertMany(tobeInsert);
  return res.send(
    new ResponseObj(
      200,
      `${tobeInsert.length} Tasks are added`,
      insertDoc,
      true
    )
  );
});
const ReDistribute=asyncHandler(async(req,res)=>{
    const {taskArr,agents,deadline}=req.body;
    let bulkOps = [];
    let agentIndex = 0; // Initialize agent index
  
    taskArr.forEach(task => {
        let taskId=new db.Types.ObjectId(task)
      bulkOps.push({
        updateOne: {
          filter: { _id: taskId },
          update: {
            $set: {
              agent: new db.Types.ObjectId(agents[agentIndex]),
              state: "Pending",
              deadline
            }
          }
        }
      });
      // Move to the next agent, wrap around if needed
      agentIndex = (agentIndex + 1) % agents.length;
    });
    const updateBulk=await ordertasks.bulkWrite(bulkOps)
    
    return res.send(new ResponseObj(200,`${taskArr.length} Tasks are Updated`,updateBulk,true))

})
const changeStatusOrder=asyncHandler(async(req,res)=>{
  const {status,taskId}=req.body;
  console.log(taskId,"dsf")

  const update=await ordertasks.findByIdAndUpdate(taskId,{$set:{state:status}},{new:true});
  return res.send(new ResponseObj(200,"Updated",update,true))
})
const getCompletedOrders=asyncHandler(async(req,res)=>{
  const agent = new db.Types.ObjectId(req.user);
  let page = Number.parseInt(req.params.page || 1);
  let pageSize = Number.parseInt(req.params.pageSize || 10);
  let skip = (page - 1) * pageSize;
  const orderDoc = await ordertasks.countDocuments({ agent,state:"Completed" });


  const taskOrder = await ordertasks
  .aggregate([
    {
      $match: {
        agent, state:"Completed"
      },
    },
    {
      $lookup: {
        from: "orders",
        localField: "order",
        foreignField: "_id",
        as: "orders",
      },
    },
  ]).sort({ _id: -1 }).skip(skip).limit(pageSize)
    return res.send(
      new ResponseObj(
        200,
        "All Completed Orders Fetched",
        { records: taskOrder, total: orderDoc },
        true
      )
    );

})
module.exports = { Distribute,ReDistribute,changeStatusOrder,getCompletedOrders };
