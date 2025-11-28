// frontend/src/services/aiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ai'; // TODO: sesuaikan dengan backend kamu

// Kirim pertanyaan ke AI Assistant
export const askAI = async (token, question) => {
  const res = await axios.post(
    `${API_URL}/ask`,
    { question },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data; // contoh: { answer: "Jawaban dari AI" }
};

// Ambil riwayat interaksi AI
export const getAIHistory = async (token) => {
  const res = await axios.get(`${API_URL}/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // contoh: [{ question, answer, timestamp }]
};

// Hapus riwayat tertentu
export const deleteAIHistory = async (token, id) => {
  const res = await axios.delete(`${API_URL}/history/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};