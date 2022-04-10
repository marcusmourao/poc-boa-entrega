const { OK } = require('../../core/http-status-codes');
const {
  buildInternalServerErrorResponse,
} = require('../../core/helpers/response-builders/unauthorized');

const dashboardRepository = require('./dashboardRepository');

async function getDashboard() {
  try {
    const {
      deliveriesPerMonth,
      monthlyRevenue,
      lastDeliveries,
    } = await dashboardRepository.getDashboard();
    return {
      statusCode: OK,
      deliveriesPerMonth,
      monthlyRevenue,
      lastDeliveries,
    };
  } catch (e) {
    return buildInternalServerErrorResponse(e);
  }
}

module.exports = {
  getDashboard,
};
