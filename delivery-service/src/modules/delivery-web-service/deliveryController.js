const Pagination = require('../../core/pagination');
const deliveryService = require('./deliveryService');

async function getDeliveries(req, res) {
  const pagination = new Pagination(req);
  try {
    const {
      statusCode,
      deliveries,
    } = await deliveryService.getDeliveries({ filters: {}, pagination });
    res.status(statusCode).json({ deliveries, pagination: pagination.toJSON() });
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

async function getDeliveryById(req, res) {
  const { id } = req.params;
  try {
    const {
      delivery,
      statusCode,
    } = await deliveryService.getDeliveryById(id);
    res.status(statusCode).json(delivery);
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

module.exports = {
  getDeliveries,
  getDeliveryById,
};
