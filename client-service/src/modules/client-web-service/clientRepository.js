const { normalizeDocument } = require('../../core/helpers/normalize-document');
const Client = require('../client-model');

function countClients({ filters = {} }) {
  return Client.count({ filters });
}

function getClients({ filters, pagination }) {
  return Client.find({ filters, pagination })
    .then((clients) => clients.map(normalizeDocument));
}

function getClientById(id) {
  return Client.getById(id).then(normalizeDocument);
}

function createClient({
  name, email, phone,
}) {
  return Client.create({
    name, email, phone,
  }).then(normalizeDocument);
}

function updateClientById(id, options) {
  return Client.updateDocumentById(id, options).then(normalizeDocument);
}

function deleteClientById(id) {
  return Client.deleteDocumentById(id);
}

module.exports = {
  countClients,
  getClients,
  createClient,
  getClientById,
  updateClientById,
  deleteClientById,
};
