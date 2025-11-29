// backend/controllers/groupController.js
import { getWhatsAppClient } from '../config/whatsapp.js';

export const antiLink = async (req, res) => {
  try {
    const client = getWhatsAppClient();
    client.on('message', async msg => {
      if (msg.body.includes('http://') || msg.body.includes('https://')) {
        await msg.reply('🚫 Link tidak diperbolehkan di grup ini!');
        await client.sendMessage(msg.from, 'Pesan dengan link terdeteksi dan diblokir.');
      }
    });
    res.status(200).json({ message: 'Anti-link aktif' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal aktifkan anti-link', error: err.message });
  }
};

export const welcomeMessage = async (req, res) => {
  try {
    const client = getWhatsAppClient();
    client.on('group_join', async (notification) => {
      await client.sendMessage(notification.id.remote, '👋 Selamat datang di grup!');
    });
    res.status(200).json({ message: 'Welcome message aktif' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal aktifkan welcome message', error: err.message });
  }
};

export const autoKick = async (req, res) => {
  const { number } = req.body;
  try {
    const client = getWhatsAppClient();
    const chat = await client.getChatById(req.body.chatId);
    await chat.removeParticipants([number]);
    res.status(200).json({ message: `User ${number} berhasil di-kick` });
  } catch (err) {
    res.status(500).json({ message: 'Gagal kick user', error: err.message });
  }
};