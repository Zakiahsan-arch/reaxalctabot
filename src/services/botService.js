// frontend/src/services/botService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bot'; // TODO: sesuaikan dengan backend kamu

// Ambil status bot
export const getBotStatus = async (token) => {
  const res = await axios.get(`${API_URL}/status`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // { status: 'online' | 'offline' }
};

// Ambil QR code untuk login
export const getQrCode = async (token) => {
  const res = await axios.get(`${API_URL}/qr`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // { qrCode: 'base64' }
};

// Kirim pesan ke WA
export const sendMessage = async (token, to, message) => {
  const res = await axios.post(
    `${API_URL}/send`,
    { to, message },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

// Ambil log pesan
export const getMessages = async (token) => {
  const res = await axios.get(`${API_URL}/messages`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // array pesan
};