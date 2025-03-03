const asyncHandler = require("../helper/asyncHandler");
const ResponseObj = require("../helper/Response");
const { orders } = require("../models/Order");
const { ordertasks } = require("../models/OrderTask");
const { tasks } = require("../models/Task");

const fetchOrders = asyncHandler(async (req, res) => {
  let page = req.params.page || 1;
  let pageSize = req.params.pageSize || 10;
  let skip = (page - 1) * pageSize;

  let count = await orders.countDocuments({});
  let orderData = await orders.aggregate([
    {
      $lookup: {
        from: "ordertasks",
        localField: "_id",
        foreignField: "order",
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
  .sort({ _id: -1 })
  .skip(Number.parseInt(skip))
  .limit(Number.parseInt(pageSize));

return res.send(
  new ResponseObj(
    200,
    "All Orders Fetched",
    { records: orderData, total: count },
    true
  )
);
});

const deleteOrder=asyncHandler(async(req,res)=>{
  const orderId=req.get("orderId")
  if(!orderId){
    return res.send(new ErrorResponse(400,"Order id is absent"))
  }
  const deleteOrderFromDB=await orders.findByIdAndDelete(orderId)
  if(!deleteOrderFromDB){
    return res.send(new ErrorResponse(200,"MayBe Order is not located correctly"))
  }
  return res.send(new ResponseObj(200,"Order Deleted",deleteOrderFromDB,true))

})
module.exports={fetchOrders,deleteOrder}