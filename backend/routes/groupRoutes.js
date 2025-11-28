// backend/routes/groupRoutes.js
import express from 'express';
import { antiLink, welcomeMessage, autoKick } from '../controllers/groupController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Aktifkan anti-link di grup
router.post('/antilink', auth, antiLink);

// Aktifkan welcome message
router.post('/welcome', auth, welcomeMessage);

// Kick user dari grup
router.post('/kick', auth, autoKick);

export default router;