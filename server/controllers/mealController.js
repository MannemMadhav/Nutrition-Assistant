const generateMeal = async (req, res) => {
  try {
    const meal = {
      _id: "meal-demo-1",
      breakfast: {
        name: "Oats with Milk & Banana",
        calories: 420,
      },
      lunch: {
        name: "Grilled Chicken with Brown Rice",
        calories: 650,
      },
      dinner: {
        name: "Paneer Salad",
        calories: 500,
      },
      snacks: {
        name: "Mixed Nuts",
        calories: 200,
      },
      calories: 1770,
      protein: 135,
      carbs: 185,
      fats: 52,
      createdAt: new Date(),
    };

    res.status(201).json({
      success: true,
      message: "Meal generated successfully",
      meal,
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
    const meals = [
      {
        _id: "meal-demo-1",
        breakfast: {
          name: "Oats with Milk & Banana",
          calories: 420,
        },
        lunch: {
          name: "Grilled Chicken with Brown Rice",
          calories: 650,
        },
        dinner: {
          name: "Paneer Salad",
          calories: 500,
        },
        snacks: {
          name: "Mixed Nuts",
          calories: 200,
        },
        calories: 1770,
        protein: 135,
        carbs: 185,
        fats: 52,
        createdAt: new Date(),
      },
    ];

    res.status(200).json({
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