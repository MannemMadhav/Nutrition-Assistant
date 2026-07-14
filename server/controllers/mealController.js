const Meal = require("../models/Meal");
const { generateMealPlan } = require("../services/mealService");

const generateMeal = async (req, res) => {
  try {
    const user = req.user;

    const meal = generateMealPlan(user);

    const savedMeal = await Meal.create({
      user: user._id,

      breakfast: meal.breakfast,
      lunch: meal.lunch,
      dinner: meal.dinner,
      snacks: meal.snacks,

      calories: meal.calories,
      protein: meal.protein,
      carbs: meal.carbs,
      fats: meal.fats,
    });

    res.status(201).json({
      success: true,
      meal: savedMeal,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getMeals = async (req, res) => {

  try {

    const meals = await Meal.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: meals.length,
      meals,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

module.exports = {
  generateMeal,
  getMeals,
};