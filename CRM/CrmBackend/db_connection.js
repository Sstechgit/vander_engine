require("dotenv").config();
const db = require("mongoose");
const dbUrl = process.env.DB


const connectToDb = async () => {

  await db.connect(dbUrl);
};

module.exports=connectToDb
