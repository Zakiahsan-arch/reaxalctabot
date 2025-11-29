// backend/models/Feature.js
import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  enabled: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: ''
  }
}, { timestamps: true });

export default mongoose.model('Feature', featureSchema);