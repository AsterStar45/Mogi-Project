// src/pages/Chatbot.jsx
import React, { useState } from 'react';
import "../styles/Chatbot.css"; 

function Chatbot() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    try {
      const res = await fetch("http://127.0.0.1:8000/api/chatbot/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      setChat([...chat, { user: message, bot: data.reply }]);
      setMessage('');
    } catch (error) {
      console.error("Error enviando mensaje:", error);
    }
  };

  return (
    <div className="chatbot-container">

      {/* --- BANNER SUPERIOR --- */}
      <div className="chatbot-banner">
          <img src="/Logo.png" alt="Mogi logo" className="chatbot-logo" />
        <span className="chatbot-title">MOGI Chatbot</span>
      </div>

      {/* --- TARJETA DEL CHAT --- */}
      <div className="chatbot-card">
        <div className="chat-window">
          {chat.map((c, i) => (
            <div key={i} className="chat-row">
              <div className="chat-user"><b>Tu:</b> {c.user}</div>
              <div className="chat-bot"><b>MOGI:</b> {c.bot}</div>
              <hr />
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="chat-input-box">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="chat-input"
          />
          <button onClick={sendMessage} className="chat-btn">Enviar</button>
        </div>

      </div>
    </div>
  );
}

export default Chatbot;
