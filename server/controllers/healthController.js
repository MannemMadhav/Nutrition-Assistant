const calculateBMI = async (req, res) => {
  try {
    const { height, weight } = req.user;

    if (!height || !weight) {
      return res.status(400).json({
        success: false,
        message: "Height and Weight required",
      });
    }

    const bmi = weight / ((height / 100) * (height / 100));

    let category = "";

    if (bmi < 18.5)
      category = "Underweight";
    else if (bmi < 25)
      category = "Normal";
    else if (bmi < 30)
      category = "Overweight";
    else
      category = "Obese";

    res.json({
      success: true,
      bmi: bmi.toFixed(2),
      category,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const calculateBMR = async (req, res) => {
  try {

    const {
      gender,
      age,
      height,
      weight,
    } = req.user;

    let bmr;

    if (gender === "Male") {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        5;
    } else {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age -
        161;
    }

    res.json({
      success: true,
      bmr: Math.round(bmr),
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const calculateCalories = async (req, res) => {
  try {

    const {
      gender,
      age,
      height,
      weight,
      activityLevel,
    } = req.user;

    let bmr;

    if (gender === "Male") {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        5;
    } else {
      bmr =
        10 * weight +
        6.25 * height -
        5 * age -
        161;
    }

    let multiplier = 1.2;

    switch (activityLevel) {

      case "Sedentary":
        multiplier = 1.2;
        break;

      case "Lightly Active":
        multiplier = 1.375;
        break;

      case "Moderately Active":
        multiplier = 1.55;
        break;

      case "Very Active":
        multiplier = 1.725;
        break;

      default:
        multiplier = 1.2;

    }

    const calories = bmr * multiplier;

    res.json({
      success: true,
      calories: Math.round(calories),
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  calculateBMI,
  calculateBMR,
  calculateCalories,
};