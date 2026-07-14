import MainLayout from "../../components/layout/MainLayout";
import MealCard from "../../components/meals/MealCard";

import useMeals from "../../hooks/useMeals";
import { generateMeal } from "../../services/mealService";

function Meals() {
  const { loading, meals, refreshMeals } = useMeals();

  const handleGenerateMeal = async () => {
  console.log("Generate button clicked");

  try {
    console.log("Calling API...");

    const response = await generateMeal();

    console.log("API Response:", response);

    await refreshMeals();

    alert("Meal generated successfully!");
  } catch (error) {
    console.error("Generate Meal Error:", error);

    alert(
      error.response?.data?.message || "Failed to generate meal."
    );
  }
};

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          Meals
        </h1>

        <button
          onClick={handleGenerateMeal}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
        >
          Generate Meal
        </button>
      </div>

      {loading ? (
        <p className="text-white">Loading meals...</p>
      ) : meals.length === 0 ? (
        <p className="text-white">
          No meals found. Click "Generate Meal".
        </p>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <MealCard
              key={meal._id}
              meal={meal}
            />
          ))}
        </div>
      )}
    </MainLayout>
  );
}

export default Meals;