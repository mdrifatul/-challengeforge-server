const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {

  await mongoose.connect(process.env.DATABASE_LOCAL, { dbName: process.env.DB_NAME });
  console.log("connected to database");
};


module.exports= connectDB