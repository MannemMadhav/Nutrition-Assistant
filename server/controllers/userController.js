const getProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      _id: "demo-user-id",
      fullName: "Madhav",
      email: "madhav@gmail.com",
      age: 20,
      gender: "Male",
      height: 175,
      weight: 70,
      goal: "Muscle Gain",
      activityLevel: "Moderately Active",
    },
  });
};

const updateProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
    user: {
      _id: "demo-user-id",
      fullName: req.body.fullName || "Madhav",
      email: "madhav@gmail.com",
      age: req.body.age || 20,
      gender: req.body.gender || "Male",
      height: req.body.height || 175,
      weight: req.body.weight || 70,
      goal: req.body.goal || "Muscle Gain",
      activityLevel:
        req.body.activityLevel || "Moderately Active",
    },
  });
};

module.exports = {
  getProfile,
  updateProfile,
};