// backend/routes/mediaRoutes.js
import express from 'express';
import { downloadMedia } from '../controllers/mediaController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Downloader media (TikTok, IG, YouTube, dll)
router.post('/download', auth, downloadMedia);

export default router;