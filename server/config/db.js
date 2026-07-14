const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.log("⚠️ No MongoDB URI found. Running without database.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);

    console.log("⚠️ Server will continue without MongoDB.");
  }
};

module.exports = connectDB;