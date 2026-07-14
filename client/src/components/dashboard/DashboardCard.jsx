function DashboardCard({ title, value, unit = "" }) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
      <h3 className="text-gray-400 text-lg">{title}</h3>

      <h1 className="text-white text-4xl font-bold mt-4">
        {value}
        <span className="text-xl ml-2 text-green-400">
          {unit}
        </span>
      </h1>
    </div>
  );
}

export default DashboardCard;