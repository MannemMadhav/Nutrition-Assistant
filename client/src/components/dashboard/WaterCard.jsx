import { useState } from "react";

function WaterCard() {

  const [water, setWater] = useState(2);

  return (

    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">

      <h2 className="text-white text-2xl font-bold">
        💧 Water Intake
      </h2>

      <h1 className="text-5xl text-green-400 mt-6">
        {water} L
      </h1>

      <button
        onClick={() => setWater((prev) => prev + 0.25)}
        className="mt-8 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl text-white"
      >
        + Add Glass
      </button>

    </div>

  );
}

export default WaterCard;