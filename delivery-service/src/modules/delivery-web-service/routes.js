const express = require('express');
const {
  getDeliveries,
  getDeliveryById,

} = require('./deliveryController');

const router = express.Router();

router.get('/', getDeliveries);
router.get('/:id', getDeliveryById);

module.exports = router;
