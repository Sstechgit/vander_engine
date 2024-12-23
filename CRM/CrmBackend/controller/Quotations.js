const { validationResult } = require("express-validator");
const asyncHandler = require("../helper/asyncHandler");
const ErrorResponse = require("../helper/Error");
const ResponseObj = require("../helper/Response.js");
const { default: mongoose } = require("mongoose");
const slugify = require("slugify");
const quotations = require("../models/Quotations.js");
function convertToSlug(str) {
  return slugify(str, {
    lower: false,
    replacement: "-",
    remove: /[^a-zA-Z0-9 _-]/g,
  });
}
const addQuotations = asyncHandler(async (req, res) => {
  const { year, make, model, part, pricing, miles, stock } = req.body;
  let description = req.body?.description || "-";
  let variant = req.body?.variant || "-";

  const storeinMongo = await quotations.create({
    year,
    miles,
    make,
    part,
    model,
    pricing,
    variant,
    stock,
    description,
    agent:req.user
  });

  return res.send(
    new ResponseObj(200, "Saved in mongo", { storeinMongo }, true)
  );
});
const EditQuotiations = asyncHandler(async (req, res) => {
  const { year, make, model, part, pricing, miles, stock,quotationId } = req.body;
  let description = req.body?.description || "-";
  let variant = req.body?.variant || "-";

  const updatedInMongo = await quotations.findByIdAndUpdate(quotationId,{$set:{
    year,
    miles,
    make,
    part,
    model,
    pricing,
    variant,
    stock,
    description,
  }});
  if(!updatedInMongo){
    return res.send(new ErrorResponse(400, "Not Changed, may be record is not saved with given id"+quotationId));

  }
  return res.send(
    new ResponseObj(200, "Updated in mongo", { updatedInMongo }, true)
  );
});
const DeleteQuotations = asyncHandler(async (req, res) => {
  const quotationId=req.get("quotationId")
  if(!quotationId){
    return res.send(new ErrorResponse(400, "No QuotationId"));
  }
  const DeleteQuotation=await quotations.findByIdAndDelete(quotationId)
  if(!DeleteQuotation){
    return res.send(new ErrorResponse(400, "Not Deleted, may be record is not saved with given id"+quotationId));

  }
  return res.send(
    new ResponseObj(200, "Deleted in mongo", { DeleteQuotation }, true)
  );
});
const AddToVanderEngines = asyncHandler(async (req, res) => {
  const { Quotation_id } = req.body;
  const findQuotation = await quotations.findById(Quotation_id);
  if (!findQuotation) {
    return res.send(new ErrorResponse(400, "No QuotationId"));
  }
  if(findQuotation.saved==true){
    return res.send(new ErrorResponse(400, "Already Saved"));
  }
  const {
    year,
    make,
    model,
    part,
    miles,
    pricing,
    variant,
    stock,
    description,
  } = findQuotation;
  let body = new FormData();
  body.append("year", convertToSlug(year));
  body.append("make", convertToSlug(make));
  body.append("model", convertToSlug(model));
  body.append("part", convertToSlug(part));
  body.append("miles", miles);
  body.append("pricing", pricing);
  body.append("variant", convertToSlug(variant));
  body.append("stock", stock);
  body.append("description", description);

  let url = "https://vanderengines.com/api/crmInsertApi.php";
  let storeinSql = await fetch(url, {
    method: "POST",
    headers: {
      Origin: "http://localhost:8000",
    },
    body,
  });
  console.log(storeinSql);
  let result = await storeinSql.json();
  console.log(storeinSql);
  if (result.success) {
    findQuotation.saved=true;
    await findQuotation.save()
    return res.send(
      new ResponseObj(200, "Saved in mysql", { storeinSql: result }, true)
    );
  } else {
    return res.send(new ErrorResponse(500, "Not Saved From 'Vander Engines MYSQL'", result));
  }
});
const fetchQuotations=asyncHandler(async(req,res)=>{
  let page = req.params.page || 1;
  let pageSize = req.params.pageSize || 10;
  let skip = (page - 1) * pageSize;
  let agent=req.user
  let count = await quotations.countDocuments({agent});
  let AllQuotations=await quotations.find({agent})
    .sort({ _id: -1 })
    .skip(Number.parseInt(skip))
    .limit(Number.parseInt(pageSize));

  return res.send(
    new ResponseObj(
      200,
      "All Quotations Fetched",
      { records: AllQuotations, total: count },
      true
    )
  );
})

module.exports = { addQuotations, AddToVanderEngines,EditQuotiations,DeleteQuotations,fetchQuotations };
