import { useEffect, useRef, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";

import ChatMessage from "../../components/chat/ChatMessage";
import ChatInput from "../../components/chat/ChatInput";
import TypingIndicator from "../../components/chat/TypingIndicator";

import api from "../../services/api";

function AIChat() {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello 👋 I'm your Nutrition AI Coach.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (text) => {

    const updated = [
      ...messages,
      {
        role: "user",
        content: text,
      },
    ];

    setMessages(updated);

    setLoading(true);

    try {

      const res = await api.post("/ai/chat", {
        message: text,
      });

      setMessages([
        ...updated,
        {
          role: "assistant",
          content: res.data.reply,
        },
      ]);

    } catch {

      setMessages([
        ...updated,
        {
          role: "assistant",
          content:
            "AI service unavailable.",
        },
      ]);

    }

    setLoading(false);

  };

  return (
    <MainLayout>

      <h1 className="text-4xl text-white font-bold mb-6">
        AI Coach
      </h1>

      <div className="bg-slate-900 rounded-2xl h-[75vh] flex flex-col">

        <div className="flex-1 overflow-y-auto p-6">

          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              role={msg.role}
              content={msg.content}
            />
          ))}

          {loading && <TypingIndicator />}

          <div ref={bottomRef} />

        </div>

        <div className="p-5">

          <ChatInput
            loading={loading}
            onSend={sendMessage}
          />

        </div>

      </div>

    </MainLayout>
  );
}

export default AIChat;