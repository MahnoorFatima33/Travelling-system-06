const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user'], default: 'user' },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
  },
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }],
});

module.exports = mongoose.model('User', userSchema);
