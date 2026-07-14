function RecentMeals({ meals = [] }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-6">
        Recent Meals
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-400">
          No meals found.
        </p>
      ) : (
        <div className="space-y-4">
          {meals.slice(0, 5).map((meal) => (
            <div
              key={meal._id}
              className="bg-slate-700 rounded-xl p-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold">
                  🍽 Meal Plan
                </h3>

                <span className="text-sm text-gray-400">
                  {meal.createdAt
                    ? new Date(meal.createdAt).toLocaleDateString()
                    : ""}
                </span>
              </div>

              <div className="space-y-2 text-gray-300 text-sm">
                <p>
                  <strong>🍳 Breakfast:</strong>{" "}
                  {meal.breakfast}
                </p>

                <p>
                  <strong>🥗 Lunch:</strong>{" "}
                  {meal.lunch}
                </p>

                <p>
                  <strong>🍛 Dinner:</strong>{" "}
                  {meal.dinner}
                </p>

                <p>
                  <strong>🥜 Snacks:</strong>{" "}
                  {meal.snacks}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-gray-400">
                    Calories
                  </p>
                  <p className="text-green-400 font-bold">
                    {meal.calories} kcal
                  </p>
                </div>

                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-gray-400">
                    Protein
                  </p>
                  <p className="text-green-400 font-bold">
                    {meal.protein} g
                  </p>
                </div>

                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-gray-400">
                    Carbs
                  </p>
                  <p className="text-green-400 font-bold">
                    {meal.carbs} g
                  </p>
                </div>

                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-xs text-gray-400">
                    Fats
                  </p>
                  <p className="text-green-400 font-bold">
                    {meal.fats} g
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentMeals;