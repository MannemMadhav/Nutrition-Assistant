import ReactMarkdown from "react-markdown";

function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-5`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 shadow-lg ${
          isUser
            ? "bg-green-600 text-white"
            : "bg-slate-800 text-white"
        }`}
      >
        <ReactMarkdown
          components={{
            code(props) {
              return (
                <code className="bg-slate-900 px-1 rounded">
                  {props.children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatMessage;