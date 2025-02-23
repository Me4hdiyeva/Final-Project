const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  accessToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  balance: { type: String, default: 0 },
  // cyrto: { type: mongoose.Schema.Types.ObjectId, ref: 'Cyrto' }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
