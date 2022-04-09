class Model {
  constructor({ model, fields }) {
    this.model = model;
    this.fields = fields;
  }

  exists({ filters }) {
    return this.model.exists(filters);
  }

  count({ filters }) {
    return new Promise((resolve, reject) => {
      this.model.countDocuments(filters, (err, count) => (err ? reject(err) : resolve(count)));
    });
  }

  find({ filters, pagination }) {
    return new Promise((resolve, reject) => {
      this.model.find(filters, this.fields, {
        sort: pagination.getSortConfiguration(),
        skip: pagination.getQuerySkip(),
        limit: pagination.getQueryLimit(),
      }, (error, documents) => (error ? reject(error) : resolve(documents)));
    });
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.model.findById(id, (error, document) => (error ? reject(error) : resolve(document)));
    });
  }

  create(args) {
    // eslint-disable-next-line
    const model = new this.model(args);
    return new Promise((resolve, reject) => {
      model.save((error, document) => (error ? reject(error) : resolve(document)));
    });
  }

  updateDocumentById(id, options) {
    return new Promise((resolve, reject) => {
      this.model.findByIdAndUpdate(id, options, {
        new: true,
      }, (error, object) => (error ? reject(error) : resolve(object)));
    });
  }

  deleteDocumentById(id) {
    return new Promise((resolve, reject) => {
      this.model.findByIdAndUpdate(id, { deleted: true }, {
        new: true,
      }, (error, object) => (error ? reject(error) : resolve(object)));
    });
  }
}

module.exports = Model;
