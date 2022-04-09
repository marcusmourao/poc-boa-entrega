const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  deleted: { type: Boolean, default: false },
}, {
  id: true,
  timestamps: true,
});

const model = mongoose.model('clients', clientSchema);

module.exports = model;
