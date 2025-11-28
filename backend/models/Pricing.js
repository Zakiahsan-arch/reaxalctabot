// backend/models/Pricing.js
import mongoose from 'mongoose';

const pricingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'IDR'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Pricing', pricingSchema);