// backend/middleware/rateLimiter.js
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // maksimal 100 request per IP
  message: {
    success: false,
    message: 'Terlalu banyak request, coba lagi nanti.'
  }
});

export default limiter;