const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  imageUrl: String,
  stock: Number,
  material: String,
  dimensions: String,
  vendorPhone: String,
});

module.exports = mongoose.model('Product', productSchema);
