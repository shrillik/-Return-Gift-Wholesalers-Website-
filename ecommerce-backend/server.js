const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/wishlist', wishlistRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

  