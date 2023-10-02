const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour', required: true },
  persons: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Purchase', purchaseSchema);