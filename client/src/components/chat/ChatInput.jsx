import { useState } from "react";

function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <form
      onSubmit={submit}
      className="border-t border-slate-700 pt-4 flex gap-4"
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask AI anything..."
        className="flex-1 bg-slate-800 text-white rounded-xl px-4 py-3 outline-none"
      />

      <button
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-xl"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;