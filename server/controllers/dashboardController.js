const getDashboard = async (req, res) => {
  res.status(200).json({
    success: true,

    user: {
      _id: "demo-user",
      fullName: "Madhav",
      email: "madhav@gmail.com",
      weight: 70,
      height: 175,
      goal: "Muscle Gain",
      activityLevel: "Moderately Active",
    },

    meals: [
      {
        _id: "meal1",
        calories: 2200,
        protein: 150,
        carbs: 250,
        fats: 65,
        breakfast: "Oats & Banana",
        lunch: "Chicken Rice",
        dinner: "Paneer Salad",
      },
    ],
  });
};

module.exports = {
  getDashboard,
};