const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place an order
router.post('/', async (req, res) => {
  const { userId, productId, quantity, trackingCode } = req.body;
  try {
    const order = new Order({ userId, productId, quantity, trackingCode, status: 'Pending' });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get orders for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate('productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update tracking status
router.put('/:orderId/status', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
