// backend/routes/aiRoutes.js
import express from 'express';
import { askAI } from '../controllers/aiController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Kirim prompt ke AI Assistant
router.post('/ask', auth, askAI);

export default router;