// backend/controllers/featureController.js
import Feature from '../models/Feature.js';

export const getFeatures = async (req, res) => {
  try {
    const features = await Feature.find({ user: req.user.id });
    res.status(200).json(features);
  } catch (err) {
    res.status(500).json({ message: 'Gagal ambil fitur', error: err.message });
  }
};

export const toggleFeature = async (req, res) => {
  const { name, enabled } = req.body;
  try {
    const updated = await Feature.findOneAndUpdate(
      { user: req.user.id, name },
      { enabled },
      { upsert: true, new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Gagal ubah fitur', error: err.message });
  }
};