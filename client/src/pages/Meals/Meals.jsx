import { useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import MealCard from "../../components/meals/MealCard";

function Meals() {
  const [meals, setMeals] = useState([
    {
      _id: "1",
      breakfast: "Oats + Banana",
      lunch: "Chicken Rice",
      dinner: "Paneer Salad",
      snacks: "Mixed Nuts",
      calories: 2200,
      protein: 150,
      carbs: 250,
      fats: 60,
    },
  ]);

  const handleGenerateMeal = () => {
    setMeals([
      {
        _id: Date.now().toString(),
        breakfast: "Eggs + Toast",
        lunch: "Rice + Chicken",
        dinner: "Paneer + Vegetables",
        snacks: "Almonds",
        calories: 2300,
        protein: 160,
        carbs: 240,
        fats: 65,
      },
    ]);

    alert("Meal Generated Successfully!");
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Meals</h1>

        <button
          onClick={handleGenerateMeal}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          Generate Meal
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      </div>
    </MainLayout>
  );
}

export default Meals;