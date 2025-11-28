// backend/models/Bot.js
import mongoose from 'mongoose';

const botSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['online', 'offline'],
    default: 'offline'
  },
  qrCode: {
    type: String, // simpan QR base64
    default: null
  },
  lastActive: {
    type: Date,
    default: null
  },
  features: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feature'
  }]
}, { timestamps: true });

export default mongoose.model('Bot', botSchema);