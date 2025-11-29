// frontend/src/context/BotContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

// Buat context
export const BotContext = createContext();

// Provider
export const BotProvider = ({ children }) => {
  const [botStatus, setBotStatus] = useState('offline'); // status bot
  const [qrCode, setQrCode] = useState(null);            // QR code login
  const [messages, setMessages] = useState([]);          // log pesan

  useEffect(() => {
    // Connect ke backend via socket.io
    const socket = io('http://localhost:5000');

    socket.on('bot-status', (status) => {
      setBotStatus(status);
    });

    socket.on('qr-code', (qr) => {
      setQrCode(qr);
    });

    socket.on('new-message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <BotContext.Provider value={{ botStatus, qrCode, messages }}>
      {children}
    </BotContext.Provider>
  );
};