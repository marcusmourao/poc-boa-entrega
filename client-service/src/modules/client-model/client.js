const Model = require('../../core/model');
const client = require('./model');

const FIELDS = 'name id email phone createdAt updatedAt deleted';

module.exports = new Model({ model: client, fields: FIELDS });
