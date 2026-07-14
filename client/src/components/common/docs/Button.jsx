function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-5 py-3 rounded-xl transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;