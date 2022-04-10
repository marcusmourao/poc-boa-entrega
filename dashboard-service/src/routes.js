const express = require('express');
const modules = require('./modules');
const { name, version } = require('../package.json');

const router = express.Router();

router.get('/status', (req, res) => {
  res.status(200).json({ name, version, message: 'Service working' });
});

router.get('/health-check', (req, res) => {
  res.send(200);
});

modules.forEach((module) => {
  router.use(`/${module.path}`, module.router);
});

module.exports = router;
