const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone: String,
  password: String, // hash it in production
  name: String,
});

module.exports = mongoose.model('User', userSchema);
