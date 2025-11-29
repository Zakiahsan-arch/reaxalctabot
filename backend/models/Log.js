// backend/models/Log.js
import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  bot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bot',
    required: true
  },
  userNumber: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    enum: ['incoming', 'outgoing'],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export default mongoose.model('Log', logSchema);