const dashboardService = require('./dashboardService');

async function getDashboard(req, res) {
  try {
    const {
      statusCode, deliveriesPerMonth, monthlyRevenue, lastDeliveries,
    } = await dashboardService.getDashboard();
    res.status(statusCode).json({ deliveriesPerMonth, monthlyRevenue, lastDeliveries });
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

module.exports = {
  getDashboard,
};
