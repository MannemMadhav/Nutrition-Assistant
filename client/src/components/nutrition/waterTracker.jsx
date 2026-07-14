function WaterTracker() {
  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <h2 className="text-white text-2xl font-bold">
        💧 Water Intake
      </h2>

      <h1 className="text-5xl text-green-400 mt-8">
        2.5 L
      </h1>

      <button
        className="mt-8 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg text-white"
      >
        + Add Glass
      </button>

    </div>
  );
}

export default WaterTracker;