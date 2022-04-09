const Pagination = require('../../core/pagination');
const clientService = require('./clientService');

function getClientsFilters(req) {
  const filters = {};
  if (req.query.name) {
    filters.name = req.query.name;
  }
  if (req.query.email) {
    filters.slug = req.query.email;
  }
  if (req.query.phone) {
    filters.slug = req.query.phone;
  }

  return filters;
}

async function getClients(req, res) {
  const pagination = new Pagination(req);
  const filters = getClientsFilters(req);
  try {
    const {
      statusCode,
      clients,
    } = await clientService.getClients({ filters, pagination });
    res.status(statusCode).json({ clients, pagination: pagination.toJSON() });
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

async function getClientById(req, res) {
  const { id } = req.params;
  try {
    const {
      client,
      statusCode,
    } = await clientService.getClientById(id);
    res.status(statusCode).json(client);
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

async function createClient(req, res) {
  try {
    const {
      name, email, phone,
    } = req.body;
    const { statusCode, client } = await clientService.createClient({
      name, email, phone,
    });
    res.status(statusCode).json(client);
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

async function updateClientById(req, res) {
  try {
    const { id } = req.params;
    const { statusCode, client } = await clientService.updateClientById(id, req.body);
    res.status(statusCode).json(client);
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

async function deleteClientById(req, res) {
  try {
    const { id } = req.params;
    const { statusCode } = await clientService.deleteClientById(id);
    res.status(statusCode).json();
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

module.exports = {
  getClients,
  getClientById,
  createClient,
  updateClientById,
  deleteClientById,
};
