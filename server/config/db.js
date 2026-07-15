const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.log("⚠ No MongoDB URI found. Running in Demo Mode.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Connection Failed");
    console.log(error.message);

    console.log("⚠ Continuing without MongoDB (Demo Mode)");
  }
};

module.exports = connectDB;