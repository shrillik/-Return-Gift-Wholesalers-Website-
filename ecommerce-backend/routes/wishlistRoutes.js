const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');

// Add to wishlist
router.post('/', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const alreadyExists = await Wishlist.findOne({ userId, productId });
    if (alreadyExists) return res.status(400).json({ message: 'Already in wishlist' });

    const wishlist = new Wishlist({ userId, productId });
    await wishlist.save();
    res.status(201).json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user's wishlist
router.get('/user/:userId', async (req, res) => {
  try {
    const items = await Wishlist.find({ userId: req.params.userId }).populate('productId');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove from wishlist
router.delete('/:id', async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.json({ message: 'Removed from wishlist' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
