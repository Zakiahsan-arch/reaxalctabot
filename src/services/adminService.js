// frontend/src/services/adminService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admin'; // TODO: sesuaikan dengan backend kamu

// Ambil daftar semua user
export const getUsers = async (token) => {
  const res = await axios.get(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // contoh: [{ id, email, role }]
};

// Update role user
export const updateUserRole = async (token, userId, role) => {
  const res = await axios.put(
    `${API_URL}/users/${userId}/role`,
    { role },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

// Hapus user
export const deleteUser = async (token, userId) => {
  const res = await axios.delete(`${API_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Generate redeem code untuk premium
export const generateRedeemCode = async (token) => {
  const res = await axios.post(
    `${API_URL}/redeem`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data; // contoh: { code: "ABC123XYZ" }
};