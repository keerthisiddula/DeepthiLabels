import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5000/api/chat', { message: input });
      setMessages(prev => [...prev, { from: 'bot', text: res.data.reply }]);
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: "Chatbot service unavailable." }]);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: '#0052cc',
          border: 'none',
          borderRadius: '50%',
          width: 60,
          height: 60,
          color: 'white',
          fontSize: 28,
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s',
        }}
        aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#003d99')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0052cc')}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 90,
            right: 20,
            width: 360,
            maxHeight: '450px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            borderRadius: '12px',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {/* Messages Panel */}
          <div
            style={{
              flex: 1,
              padding: '12px 16px',
              overflowY: 'auto',
              borderBottom: '1px solid #ddd',
              backgroundColor: 'white',
              borderRadius: '12px 12px 0 0',
            }}
          >
            {messages.length === 0 && (
              <p style={{ color: '#999', fontStyle: 'italic' }}>How can I assist you today?</p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    backgroundColor: msg.from === 'user' ? '#0052cc' : '#e6e6e6',
                    color: msg.from === 'user' ? 'white' : '#333',
                    padding: '10px 16px',
                    borderRadius: msg.from === 'user'
                      ? '20px 20px 0 20px'
                      : '20px 20px 20px 0',
                    maxWidth: '75%',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.4',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              gap: '10px',
              borderRadius: '0 0 12px 12px',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..."
              aria-label="Chat message input"
              style={{
                flex: 1,
                padding: '10px 12px',
                borderRadius: 20,
                border: '1px solid #ccc',
                fontSize: 16,
                outline: 'none',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = '#0052cc')}
              onBlur={e => (e.target.style.borderColor = '#ccc')}
              autoComplete="off"
            />
            <button
              onClick={sendMessage}
              style={{
                backgroundColor: '#0052cc',
                color: 'white',
                border: 'none',
                borderRadius: 20,
                padding: '0 20px',
                fontSize: 18,
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,82,204,0.4)',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#003d99')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0052cc')}
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
