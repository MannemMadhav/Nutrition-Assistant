function ProgressCard({ title, value, unit }) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6">
      <p className="text-gray-400 text-lg">{title}</p>

      <h1 className="text-white text-4xl font-bold mt-4">
        {value}
        {unit && (
          <span className="text-green-400 text-xl ml-2">
            {unit}
          </span>
        )}
      </h1>
    </div>
  );
}

export default ProgressCard;