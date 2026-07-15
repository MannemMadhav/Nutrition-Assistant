const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "demo_secret"
    );

    // Demo user (No MongoDB)
    req.user = {
      _id: decoded.id || "demo-user-id",
      fullName: "Madhav",
      email: "madhav@gmail.com",
      age: 20,
      gender: "Male",
      height: 175,
      weight: 70,
      goal: "Muscle Gain",
      activityLevel: "Moderately Active",
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = {
  protect,
};