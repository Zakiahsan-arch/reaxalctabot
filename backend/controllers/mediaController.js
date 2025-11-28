// backend/controllers/mediaController.js
import axios from 'axios';

export const downloadMedia = async (req, res) => {
  const { url } = req.body;
  try {
    if (!url) return res.status(400).json({ message: 'URL tidak boleh kosong' });

    // Contoh sederhana: ambil metadata dari URL
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];

    res.set('Content-Type', contentType);
    res.send(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Gagal download media', error: err.message });
  }
};