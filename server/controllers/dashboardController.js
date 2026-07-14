const Nutrition = require("../models/Nutrition");

const getDashboard = async (req, res) => {
  try {
    const user = req.user;

    const latestNutrition = await Nutrition.findOne({
      user: user._id,
    }).sort({
      createdAt: -1,
    });

    const bmi = (
      user.weight /
      ((user.height / 100) * (user.height / 100))
    ).toFixed(1);

    let bmr;

    if (user.gender === "Male") {
      bmr =
        10 * user.weight +
        6.25 * user.height -
        5 * user.age +
        5;
    } else {
      bmr =
        10 * user.weight +
        6.25 * user.height -
        5 * user.age -
        161;
    }

    const multiplier =
      user.activityLevel === "Sedentary"
        ? 1.2
        : user.activityLevel === "Lightly Active"
        ? 1.375
        : user.activityLevel === "Moderately Active"
        ? 1.55
        : user.activityLevel === "Very Active"
        ? 1.725
        : 1.9;

    const dailyCalories = Math.round(bmr * multiplier);

    res.json({
      success: true,
      dashboard: {
        currentWeight: user.weight,
        goal: user.goal,
        bmi,
        bmr: Math.round(bmr),
        dailyCalories,
        consumedCalories: latestNutrition?.calories || 0,
        remainingCalories:
          dailyCalories - (latestNutrition?.calories || 0),
        protein: latestNutrition?.protein || 0,
        carbs: latestNutrition?.carbs || 0,
        fats: latestNutrition?.fats || 0,
        water: latestNutrition?.water || 0,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getDashboard,
};