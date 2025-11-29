// frontend/src/hooks/useBotStatus.js
import { useContext } from 'react';
import { BotContext } from '../context/BotContext.jsx';

// Hook untuk akses BotContext
const useBotStatus = () => {
  const context = useContext(BotContext);
  if (!context) {
    throw new Error('useBotStatus harus digunakan di dalam BotProvider');
  }
  return context;
};

export default useBotStatus;