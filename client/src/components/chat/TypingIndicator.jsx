function TypingIndicator() {
  return (
    <div className="flex justify-start mb-5">
      <div className="bg-slate-800 rounded-2xl px-5 py-4 flex gap-2">

        <div className="w-2 h-2 bg-white rounded-full animate-bounce" />

        <div
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />

        <div
          className="w-2 h-2 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        />

      </div>
    </div>
  );
}

export default TypingIndicator;