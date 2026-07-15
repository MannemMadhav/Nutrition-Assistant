const addNutrition = async (req, res) => {
  try {
    const {
      calories,
      protein,
      carbs,
      fats,
      water,
    } = req.body;

    res.status(201).json({
      success: true,
      message: "Nutrition saved successfully",
      nutrition: {
        _id: "nutrition-demo-1",
        calories: calories || 2100,
        protein: protein || 140,
        carbs: carbs || 240,
        fats: fats || 60,
        water: water || 2.5,
        createdAt: new Date(),
      },
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
    const history = [
      {
        _id: "nutrition-demo-1",
        calories: 2100,
        protein: 140,
        carbs: 240,
        fats: 60,
        water: 2.5,
        createdAt: new Date(),
      },
      {
        _id: "nutrition-demo-2",
        calories: 1980,
        protein: 132,
        carbs: 225,
        fats: 58,
        water: 2.2,
        createdAt: new Date(Date.now() - 86400000),
      },
    ];

    res.status(200).json({
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