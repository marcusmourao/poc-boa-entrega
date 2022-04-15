const express = require('express');
const {
  getDashboard,
} = require('./dashboardController');

const router = express.Router();

router.get('/', getDashboard);

module.exports = router;
