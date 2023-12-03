const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Phone:{type:Number,required:true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user'], default: 'user' },

});

module.exports = mongoose.model('User', userSchema);
