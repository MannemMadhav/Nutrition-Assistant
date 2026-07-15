const jwt = require("jsonwebtoken");

const demoUser = {
  _id: "demo-user-id",
  fullName: "Madhav",
  email: "madhav@gmail.com",
  age: 20,
  gender: "Male",
  height: 175,
  weight: 70,
  goal: "Muscle Gain",
  activityLevel: "Moderately Active",
};

const generateToken = () => {
  return jwt.sign(
    { id: demoUser._id },
    process.env.JWT_SECRET || "demo_secret",
    { expiresIn: "30d" }
  );
};

// Register
const registerUser = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Registration Successful (Demo)",
    token: generateToken(),
    user: demoUser,
  });
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Login Successful (Demo)",
    token: generateToken(),
    user: demoUser,
  });
};

module.exports = {
  registerUser,
  loginUser,
};