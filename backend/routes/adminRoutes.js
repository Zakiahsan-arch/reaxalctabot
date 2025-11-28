// backend/routes/adminRoutes.js
import express from 'express';
import { getUsers, updateUserRole, addPricing, redeemCode } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Ambil semua user (admin only)
router.get('/users', auth, getUsers);

// Update role user (admin only)
router.put('/role', auth, updateUserRole);

// Tambah paket pricing (admin only)
router.post('/pricing', auth, addPricing);

// Redeem code untuk premium
router.post('/redeem', auth, redeemCode);

export default router;