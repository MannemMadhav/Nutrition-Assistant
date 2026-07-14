function MacroProgress({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5">

      <div className="flex justify-between">

        <h2 className="text-white">
          {title}
        </h2>

        <span className="text-green-400">
          {value}%
        </span>

      </div>

      <div className="bg-slate-700 h-3 rounded-full mt-4">

        <div
          className="bg-green-500 h-3 rounded-full"
          style={{ width: `${value}%` }}
        />

      </div>

    </div>
  );
}

export default MacroProgress;