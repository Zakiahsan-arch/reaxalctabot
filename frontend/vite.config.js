// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Konfigurasi Vite
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // default port untuk dev server
    open: true, // otomatis buka browser
    proxy: {
      // Proxy API ke backend (misalnya Express di port 5000)
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
      '/socket.io': {
        target: 'http://localhost:5000',
        ws: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // shortcut import
    },
  },
});