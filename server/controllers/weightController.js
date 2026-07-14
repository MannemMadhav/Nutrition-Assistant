const Weight = require("../models/Weight");

// Add Weight
const addWeight = async (req, res) => {
  try {
    const { weight } = req.body;

    if (!weight) {
      return res.status(400).json({
        success: false,
        message: "Weight is required",
      });
    }

    const newWeight = await Weight.create({
      user: req.user._id,
      weight,
    });

    res.status(201).json({
      success: true,
      message: "Weight saved successfully",
      data: newWeight,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Weight History
const getWeightHistory = async (req, res) => {
  try {
    const history = await Weight.find({
      user: req.user._id,
    }).sort({ date: 1 });

    res.json({
      success: true,
      count: history.length,
      history,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addWeight,
  getWeightHistory,
};