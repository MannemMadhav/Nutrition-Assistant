const User = require("../models/User");

// ==========================
// Get Profile
// ==========================
const getProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Profile
// ==========================
const updateProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.fullName = req.body.fullName || user.fullName;
    user.age = req.body.age || user.age;
    user.gender = req.body.gender || user.gender;
    user.height = req.body.height || user.height;
    user.weight = req.body.weight || user.weight;
    user.goal = req.body.goal || user.goal;
    user.activityLevel = req.body.activityLevel || user.activityLevel;

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: updatedUser,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getProfile,
  updateProfile,
};