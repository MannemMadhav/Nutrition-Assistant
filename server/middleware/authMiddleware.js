const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    console.log("\n========== AUTH DEBUG ==========");
    console.log("Authorization Header:");
    console.log(req.headers.authorization);

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];

      console.log("\nReceived Token:");
      console.log(token);

      console.log("\nJWT Secret:");
      console.log(process.env.JWT_SECRET);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("\nDecoded Token:");
      console.log(decoded);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      req.user = user;

      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "No Bearer token provided",
      });
    }
  } catch (error) {
    console.log("\n========== JWT ERROR ==========");
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Token is invalid.",
    });
  }
};

module.exports = {
  protect,
};