// backend/controllers/adminController.js
import User from '../models/User.js';
import Pricing from '../models/Pricing.js';
import Redeem from '../models/Redeem.js';

// Ambil semua user
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Gagal ambil user', error: err.message });
  }
};

// Update role user (misalnya jadi admin/premium)
export const updateUserRole = async (req, res) => {
  const { userId, role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
    res.status(200).json({ message: 'Role user diperbarui', user });
  } catch (err) {
    res.status(500).json({ message: 'Gagal update role', error: err.message });
  }
};

// Tambah paket pricing
export const addPricing = async (req, res) => {
  const { name, features, price } = req.body;
  try {
    const pricing = await Pricing.create({ name, features, price });
    res.status(201).json({ message: 'Paket pricing ditambahkan', pricing });
  } catch (err) {
    res.status(500).json({ message: 'Gagal tambah pricing', error: err.message });
  }
};

// Redeem code untuk akses premium
export const redeemCode = async (req, res) => {
  const { code } = req.body;
  try {
    const redeem = await Redeem.findOne({ code });
    if (!redeem) return res.status(404).json({ message: 'Kode tidak valid' });

    const user = await User.findById(req.user.id);
    user.role = 'premium';
    await user.save();

    res.status(200).json({ message: 'Redeem berhasil, akun jadi premium', user });
  } catch (err) {
    res.status(500).json({ message: 'Gagal redeem code', error: err.message });
  }
};