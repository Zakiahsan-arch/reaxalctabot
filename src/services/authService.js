// frontend/src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // TODO: sesuaikan dengan backend kamu

// Register user baru
export const register = async (name, email, password) => {
  const res = await axios.post(`${API_URL}/register`, { name, email, password });
  return res.data;
};

// Login user
export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data; // biasanya { user, token }
};

// Logout user
export const logout = async () => {
  const res = await axios.post(`${API_URL}/logout`);
  return res.data;
};

// Cek profil user
export const getProfile = async (token) => {
  const res = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};