const express = require('express');
const {
  getClients,
  getClientById,
  createClient,
  updateClientById,
  deleteClientById,
} = require('./clientController');

const router = express.Router();

router.get('/', getClients);
router.post('/', createClient);

router.get('/:id', getClientById);
router.patch('/:id', updateClientById);
router.delete('/:id', deleteClientById);

module.exports = router;
