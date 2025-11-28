// backend/utils/notifier.js
import { Server } from 'socket.io';

let io;

export const initNotifier = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('🔌 Client connected:', socket.id);
    socket.on('disconnect', () => {
      console.log('❌ Client disconnected:', socket.id);
    });
  });
};

export const sendNotification = (event, data) => {
  if (!io) {
    console.error('❌ Notifier belum diinisialisasi');
    return;
  }
  io.emit(event, data);
};