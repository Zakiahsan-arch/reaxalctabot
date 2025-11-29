// frontend/src/services/mediaService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/media'; // TODO: sesuaikan dengan backend kamu

// Download video dari TikTok/Instagram/YouTube
export const downloadMedia = async (token, url) => {
  const res = await axios.post(
    `${API_URL}/download`,
    { url },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data; // contoh: { success: true, fileUrl: 'https://...' }
};

// Ambil riwayat download
export const getDownloadHistory = async (token) => {
  const res = await axios.get(`${API_URL}/history`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // contoh: [{ url, status, fileUrl }]
};

// Hapus riwayat download tertentu
export const deleteDownload = async (token, id) => {
  const res = await axios.delete(`${API_URL}/history/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};