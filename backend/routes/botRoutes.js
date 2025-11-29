// backend/routes/botRoutes.js
import express from 'express';
import { getBotStatus, restartBot } from '../controllers/botController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Ambil status bot WA
router.get('/status', auth, getBotStatus);

// Restart bot WA
router.post('/restart', auth, restartBot);

export default router;