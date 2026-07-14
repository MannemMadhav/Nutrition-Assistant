function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-gray-300 text-sm">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`w-full rounded-xl bg-slate-800 text-white p-3 outline-none border border-slate-700 focus:border-green-500 ${className}`}
      />

      {error && (
        <p className="text-red-400 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;