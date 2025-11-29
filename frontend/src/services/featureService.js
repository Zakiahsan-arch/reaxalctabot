// frontend/src/services/featureService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/features'; // TODO: sesuaikan dengan backend kamu

// Ambil daftar fitur bot
export const getFeatures = async (token) => {
  const res = await axios.get(`${API_URL}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // contoh: [{ name: 'Anti-Link', enabled: true }]
};

// Update status fitur (aktif/nonaktif)
export const toggleFeature = async (token, featureName, enabled) => {
  const res = await axios.post(
    `${API_URL}/toggle`,
    { featureName, enabled },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

// Tambah fitur baru (opsional)
export const addFeature = async (token, featureName, description) => {
  const res = await axios.post(
    `${API_URL}/add`,
    { featureName, description },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};