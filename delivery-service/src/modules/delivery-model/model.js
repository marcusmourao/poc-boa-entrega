const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
  clientId: { type: String, required: true },
  originAddress: {
    street: { type: String },
    number: { type: String },
    complement: { type: String },
    neighborhood: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
  },
  destinationAddress: {
    street: { type: String },
    number: { type: String },
    complement: { type: String },
    neighborhood: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
  },
  status: { type: String },
  routeSteps: { type: Array },
}, {
  id: true,
  timestamps: true,
});

const model = mongoose.model('deliveries', deliverySchema);

module.exports = model;
