const getDashboard = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      dashboard: {
        calories: {
          consumed: 1850,
          goal: 2200,
        },
        water: {
          consumed: 2.4,
          goal: 3,
        },
        protein: {
          consumed: 120,
          goal: 150,
        },
        carbs: {
          consumed: 210,
          goal: 260,
        },
        fat: {
          consumed: 55,
          goal: 70,
        },
        recentMeals: [
          {
            name: "Oats with Milk",
            calories: 350,
            time: "08:00 AM",
          },
          {
            name: "Chicken Rice",
            calories: 620,
            time: "01:00 PM",
          },
          {
            name: "Banana Shake",
            calories: 280,
            time: "05:30 PM",
          },
        ],
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