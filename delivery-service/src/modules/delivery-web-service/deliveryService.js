const {
  OK,
  NOT_FOUND,
} = require('../../core/http-status-codes');
const { buildInternalServerErrorResponse } = require('../../core/helpers/response-builders/internalServerError');

const deliveryRepository = require('./deliveryRepository');

async function getDeliveries({ filters, pagination }) {
  try {
    const [count, deliveries] = await Promise.all([
      deliveryRepository.countDeliveries({ filters }),
      deliveryRepository.getDeliveries({ filters, pagination }),
    ]);
    pagination.setCount(count);
    return {
      statusCode: OK,
      deliveries,
    };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

async function getDeliveryById(id) {
  try {
    const delivery = await deliveryRepository.getDeliveryById(id);
    if (delivery) {
      return { statusCode: OK, delivery };
    }
    return { statusCode: NOT_FOUND };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

module.exports = {
  getDeliveries,
  getDeliveryById,
};
