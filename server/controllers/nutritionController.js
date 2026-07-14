const Nutrition = require("../models/Nutrition");

const addNutrition = async (req, res) => {
  try {
    const {
      calories,
      protein,
      carbs,
      fats,
      water,
    } = req.body;

    const nutrition = await Nutrition.create({
      user: req.user._id,
      calories,
      protein,
      carbs,
      fats,
      water,
    });

    res.status(201).json({
      success: true,
      nutrition,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getNutritionHistory = async (req, res) => {
  try {
    const history = await Nutrition.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

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
  addNutrition,
  getNutritionHistory,
};