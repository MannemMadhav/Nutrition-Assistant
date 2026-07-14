function GoalProgress() {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6">

      <div className="flex justify-between mb-4">

        <h2 className="text-white text-xl font-semibold">
          Goal Completion
        </h2>

        <span className="text-green-400">
          78%
        </span>

      </div>

      <div className="bg-slate-700 rounded-full h-4">

        <div
          className="bg-green-500 rounded-full h-4"
          style={{ width: "78%" }}
        />

      </div>

    </div>
  );
}

export default GoalProgress;