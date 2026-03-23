import { useState, useRef, useCallback } from "react";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export function useChatStream() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (
      question: string,
      context: { subject: string; topic: string; ageGroup: string; conversationId?: number }
    ) => {
      // Add user message immediately
      const userMessageId = Math.random().toString(36).substring(7);
      setMessages((prev) => [
        ...prev,
        { id: userMessageId, role: "user", content: question, timestamp: new Date() },
      ]);

      // Prepare placeholder for assistant response
      const assistantMessageId = Math.random().toString(36).substring(7);
      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", content: "", timestamp: new Date() },
      ]);

      setIsStreaming(true);
      setError(null);

      // Setup abort controller for cancelling
      abortControllerRef.current = new AbortController();

      try {
        const response = await fetch("/api/learn/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question,
            ...context,
          }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to send message: ${response.statusText}`);
        }

        if (!response.body) {
          throw new Error("No response body");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6).trim();
              if (!data || data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                
                if (parsed.content) {
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === assistantMessageId
                        ? { ...msg, content: msg.content + parsed.content }
                        : msg
                    )
                  );
                }
                
                if (parsed.done) {
                  setIsStreaming(false);
                }
              } catch (e) {
                console.error("Error parsing SSE chunk:", e, data);
              }
            }
          }
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Stream aborted");
        } else {
          console.error("Chat error:", err);
          setError(err.message || "An error occurred while chatting.");
          
          // Show error in chat
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessageId
                ? { ...msg, content: msg.content + "\n\n**Oops! My circuits got a little mixed up. Could you try asking again? 🤖⚡**" }
                : msg
            )
          );
        }
      } finally {
        setIsStreaming(false);
        abortControllerRef.current = null;
      }
    },
    []
  );

  const stopStream = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isStreaming,
    error,
    sendMessage,
    stopStream,
    clearMessages,
  };
}
