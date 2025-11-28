// backend/utils/logger.js
import fs from 'fs';
import path from 'path';

const logFile = path.join(process.cwd(), 'logs', 'server.log');

// Pastikan folder logs ada
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

export const logInfo = (message) => {
  const log = `[INFO] ${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync(logFile, log);
  console.log(log.trim());
};

export const logError = (message) => {
  const log = `[ERROR] ${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync(logFile, log);
  console.error(log.trim());
};

export const logWarn = (message) => {
  const log = `[WARN] ${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync(logFile, log);
  console.warn(log.trim());
};