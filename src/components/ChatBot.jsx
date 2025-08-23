import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Predefined FAQ
  const faqQuestions = [
    {
      question: "What types of labels do you offer?",
      answer: `We offer a wide range of high-quality labels to suit different business needs, including:
- Barcode Plain & Printed Labels
- Multicolor Roll Labels
- Polyester / Synthetic Labels
- Thermal Transfer Ribbons
- Specialty Labels
- Tamper-Evident Labels (for extra security)`,
    },
    {
      question: "Do you provide barcode solutions?",
      answer:
        "Yes, we also provide barcode and QR code label solutions tailored to your business needs.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly through our website or by contacting our sales team.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve industries including retail, healthcare, logistics, and manufacturing.",
    },
    {
      question: "What is your delivery time?",
      answer:
        "Delivery time varies depending on the order size and customization, but typically ranges between 5–7 business days.",
    },
  ];

  const sendMessage = async (text) => {
    if (!text.trim()) return;
    const userMessage = { from: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Check if question is in FAQs
    const matchedFAQ = faqQuestions.find(
      (faq) => faq.question.toLowerCase() === text.toLowerCase()
    );

    if (matchedFAQ) {
      setMessages((prev) => [...prev, { from: "bot", text: matchedFAQ.answer }]);
      return;
    }

    // Otherwise call backend AI
    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: text,
      });
      setMessages((prev) => [...prev, { from: "bot", text: res.data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Chatbot service unavailable." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: "#0052cc",
          border: "none",
          borderRadius: "50%",
          width: 60,
          height: 60,
          color: "white",
          fontSize: 28,
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 380,
            maxHeight: "500px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            zIndex: 1000,
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#003d99",
              color: "white",
              padding: "16px",
              fontWeight: "bold",
            }}
          >
            Virtual Assistant
          </div>

          {/* Chat Body */}
          <div
            style={{
              flex: 1,
              backgroundColor: "white",
              padding: "12px 16px",
              overflowY: "auto",
            }}
          >
            {messages.length === 0 && (
              <div>
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "12px",
                    fontWeight: "500",
                  }}
                >
                  Hi 👋, I'm a virtual assistant. How can I help you today?
                </p>
                {faqQuestions.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(faq.question)}
                    style={{
                      display: "block",
                      width: "100%",
                      marginBottom: "8px",
                      padding: "10px",
                      textAlign: "left",
                      border: "1px solid #ddd",
                      borderRadius: "6px",
                      background: "#f9f9f9",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.from === "user" ? "flex-end" : "flex-start",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    backgroundColor:
                      msg.from === "user" ? "#0052cc" : "#e6e6e6",
                    color: msg.from === "user" ? "white" : "#333",
                    padding: "10px 14px",
                    borderRadius:
                      msg.from === "user"
                        ? "18px 18px 0 18px"
                        : "18px 18px 18px 0",
                    maxWidth: "75%",
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{ display: "flex", padding: "10px", background: "#f0f0f0" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                borderRadius: "20px",
                padding: "10px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              style={{
                marginLeft: "8px",
                background: "#0052cc",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
