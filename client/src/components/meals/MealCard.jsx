function MealCard({ meal }) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold text-white">
          🍽 Meal Plan
        </h2>

        <span className="bg-green-600 px-3 py-1 rounded-full text-white text-sm">
          {new Date(meal.createdAt).toLocaleDateString()}
        </span>

      </div>

      <div className="space-y-4 text-gray-300">

        <p>
          🍳 <strong>Breakfast:</strong> {meal.breakfast}
        </p>

        <p>
          🥗 <strong>Lunch:</strong> {meal.lunch}
        </p>

        <p>
          🍛 <strong>Dinner:</strong> {meal.dinner}
        </p>

        <p>
          🥜 <strong>Snacks:</strong> {meal.snacks}
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-slate-700 rounded-xl p-4">
          <p className="text-gray-400">
            Calories
          </p>

          <h2 className="text-white text-2xl font-bold">
            {meal.calories}
          </h2>
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          <p className="text-gray-400">
            Protein
          </p>

          <h2 className="text-white text-2xl font-bold">
            {meal.protein} g
          </h2>
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          <p className="text-gray-400">
            Carbs
          </p>

          <h2 className="text-white text-2xl font-bold">
            {meal.carbs} g
          </h2>
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          <p className="text-gray-400">
            Fats
          </p>

          <h2 className="text-white text-2xl font-bold">
            {meal.fats} g
          </h2>
        </div>

      </div>

    </div>
  );
}

export default MealCard;