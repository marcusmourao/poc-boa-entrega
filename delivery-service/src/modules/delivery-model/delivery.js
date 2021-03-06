const Model = require('../../core/model');
const delivery = require('./model');

const FIELDS = 'id clientId originAddress destinationAddress status routeSteps items createdAt updatedAt deleted';

module.exports = new Model({ model: delivery, fields: FIELDS });
