function StatCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <p className="text-gray-400">{title}</p>

      <h2 className="text-white text-3xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}

export default StatCard;