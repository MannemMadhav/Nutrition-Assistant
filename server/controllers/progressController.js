const Weight = require("../models/Weight");

const addWeight = async (req, res) => {
  try {
    const { weight } = req.body;

    if (!weight) {
      return res.status(400).json({
        success: false,
        message: "Weight is required",
      });
    }

    const progress = await Weight.create({
      user: req.user._id,
      weight,
    });

    res.status(201).json({
      success: true,
      progress,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getProgress = async (req, res) => {

  try {

    const history = await Weight.find({
      user: req.user._id,
    }).sort({
      createdAt: 1,
    });

    let change = 0;

    if (history.length >= 2) {

      change =
        history[history.length - 1].weight -
        history[0].weight;

    }

    res.json({
      success: true,
      totalEntries: history.length,
      totalChange: change,
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
  getProgress,
};