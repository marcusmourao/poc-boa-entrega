const { normalizeDocument } = require('../../core/helpers/normalize-document');
const Delivery = require('../delivery-model');

function countDeliveries({ filters = {} }) {
  return Delivery.count({ filters });
}

function getDeliveries({ filters, pagination }) {
  return Delivery.find({ filters, pagination })
    .then((deliveries) => deliveries.map(normalizeDocument));
}

function getDeliveryById(id) {
  return Delivery.getById(id).then(normalizeDocument);
}

function createDelivery({
  name, slug, description, enabled,
}) {
  return Delivery.create({
    name, slug, description, enabled,
  }).then(normalizeDocument);
}

function updateDeliveryById(id, options) {
  return Delivery.updateDocumentById(id, options).then(normalizeDocument);
}

function deleteDeliveryById(id) {
  return Delivery.deleteDocumentById(id);
}

module.exports = {
  countDeliveries,
  getDeliveries,
  createDelivery,
  getDeliveryById,
  updateDeliveryById,
  deleteDeliveryById,
};
