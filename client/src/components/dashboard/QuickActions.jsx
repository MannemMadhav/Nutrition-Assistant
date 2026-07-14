import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">

      <h2 className="text-white text-2xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Link
          to="/meals"
          className="bg-green-600 hover:bg-green-700 rounded-xl p-4 text-white text-center"
        >
          Generate Meal
        </Link>

        <Link
          to="/nutrition"
          className="bg-blue-600 hover:bg-blue-700 rounded-xl p-4 text-white text-center"
        >
          Nutrition
        </Link>

        <Link
          to="/chat"
          className="bg-purple-600 hover:bg-purple-700 rounded-xl p-4 text-white text-center"
        >
          AI Coach
        </Link>

        <Link
          to="/profile"
          className="bg-orange-600 hover:bg-orange-700 rounded-xl p-4 text-white text-center"
        >
          Profile
        </Link>

      </div>

    </div>
  );
}

export default QuickActions;