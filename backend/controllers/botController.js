// backend/controllers/botController.js
import { getWhatsAppClient } from '../config/whatsapp.js';

export const getBotStatus = async (req, res) => {
  try {
    const client = getWhatsAppClient();
    const info = client.info || {};
    res.status(200).json({
      status: client?.isReady ? 'online' : 'offline',
      user: info.wid || null,
      platform: info.platform || null,
    });
  } catch (err) {
    res.status(500).json({ message: 'Gagal ambil status bot', error: err.message });
  }
};

export const restartBot = async (req, res) => {
  try {
    const client = getWhatsAppClient();
    await client.destroy();
    await client.initialize();
    res.status(200).json({ message: 'Bot berhasil direstart' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal restart bot', error: err.message });
  }
};