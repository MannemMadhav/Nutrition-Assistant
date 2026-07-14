function DashboardCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 text-white shadow-lg">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <h1 className="text-4xl font-bold mt-4">
        {value}
      </h1>

    </div>
  );
}

export default DashboardCard;