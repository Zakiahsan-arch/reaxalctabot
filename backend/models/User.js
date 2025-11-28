// backend/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama wajib diisi']
  },
  email: {
    type: String,
    required: [true, 'Email wajib diisi'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password wajib diisi']
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'premium'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);