function GoalCard({ user }) {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 shadow-lg">

      <h2 className="text-white text-2xl font-bold">
        Today's Goal
      </h2>

      <p className="text-green-100 mt-2">
        {user?.goal || "No Goal Selected"}
      </p>

      <div className="bg-green-300 rounded-full h-4 mt-6">

        <div
          className="bg-white rounded-full h-4"
          style={{
            width: "75%",
          }}
        />

      </div>

      <p className="text-white mt-3">
        75% Completed
      </p>

    </div>
  );
}

export default GoalCard;