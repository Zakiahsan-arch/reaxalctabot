// backend/controllers/aiController.js
import axios from 'axios';

export const askAI = async (req, res) => {
  const { prompt } = req.body;
  try {
    if (!prompt) return res.status(400).json({ message: 'Prompt tidak boleh kosong' });

    // Contoh integrasi ke Kolosal CLI / API GPT
    const response = await axios.post('http://localhost:11434/api/generate', {
      prompt
    });

    res.status(200).json({ reply: response.data.response || 'Tidak ada jawaban' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal memproses AI', error: err.message });
  }
};