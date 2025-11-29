// backend/config/env.js
import dotenv from 'dotenv';

const loadEnv = () => {
  dotenv.config();

  const requiredVars = ['PORT', 'MONGO_URI', 'JWT_SECRET'];
  requiredVars.forEach((key) => {
    if (!process.env[key]) {
      console.error(`❌ Missing env variable: ${key}`);
      process.exit(1);
    }
  });

  console.log('✅ Environment variables loaded');
};

export default loadEnv;