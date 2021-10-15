// purchaseController.js
const Purchase = require('../models/purchase');

exports.getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.status(200).json({
      status: 'success',
      data: {
        purchases,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.createPurchase = async (req, res) => {
  try {
    const newPurchase = await Purchase.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        purchase: newPurchase,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};
