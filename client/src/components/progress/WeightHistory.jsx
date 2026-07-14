const history = [
  {
    date: "10 Jul",
    weight: "67 kg",
  },
  {
    date: "15 Jul",
    weight: "68 kg",
  },
  {
    date: "20 Jul",
    weight: "68.5 kg",
  },
];

function WeightHistory() {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6">

      <h2 className="text-white text-2xl font-bold mb-5">
        Weight History
      </h2>

      <div className="space-y-3">

        {history.map((item) => (
          <div
            key={item.date}
            className="flex justify-between border-b border-slate-700 pb-3"
          >
            <span className="text-gray-300">
              {item.date}
            </span>

            <span className="text-white font-semibold">
              {item.weight}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default WeightHistory;