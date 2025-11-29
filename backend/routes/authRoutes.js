// backend/routes/authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authController.js';
import limiter from '../middleware/rateLimiter.js';

const router = express.Router();

// Registrasi user baru
router.post('/register', limiter, register);

// Login user
router.post('/login', limiter, login);

export default router;