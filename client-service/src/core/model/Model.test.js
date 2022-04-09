// eslint-disable-next-line
const Pagination = require('../pagination');
const Model = require('.');

function getReqMock({ pageSize, pageNumber } = {}) {
  return {
    query: {
      pageSize: pageSize || 10,
      pageNumber: pageNumber || 2,
      sortBy: 'name',
      sortType: 'ASC',
      textSearch: 'text-search',
    },
  };
}

function getModelMock() {
  return {
    exists: jest.fn(),
    countDocuments: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    save: jest.fn(),
    findByIdAndUpdate: jest.fn(),
  };
}

function getFieldsMock() {
  return 'name description age';
}

function getFiltersMock() {
  return {
    field: 'some-value',
  };
}

function getPaginationMock() {
  return new Pagination(getReqMock());
}

function getCountMock() {
  return 10;
}

function getDocumentsMock() {
  return [{ mock: true }];
}

class MockModelClassSaveWithSuccess {
  constructor(mock) {
    this.mock = mock;
  }

  // eslint-disable-next-line
  save(callback) {
    callback(null, [getDocumentsMock()]);
  }
}

class MockModelClassSaveWithError {
  constructor(mock) {
    this.mock = mock;
  }

  // eslint-disable-next-line
  save(callback) {
    callback(new Error('mock-error'));
  }
}

describe('Model', () => {
  it('should instantiate a model without errors', () => {
    const model = getModelMock();
    const fields = getFieldsMock();
    const modelInstance = new Model({ model, fields });

    expect(modelInstance.model).toEqual(model);
    expect(modelInstance.fields).toEqual(fields);
  });

  it('should check if documents exists', async () => {
    const responseMock = true;
    const model = getModelMock();
    model.exists.mockResolvedValue(responseMock);
    const fields = getFieldsMock();
    const filters = getFiltersMock();
    const modelInstance = new Model({ model, fields });

    const response = await modelInstance.exists({ filters });

    expect(model.exists).toHaveBeenCalledTimes(1);
    expect(model.exists).toHaveBeenCalledWith(filters);
    expect(response).toBe(responseMock);
  });

  it('should count documents', async () => {
    const model = getModelMock();
    model.countDocuments.mockImplementation((fields, callback) => {
      callback(null, getCountMock());
    });
    const fields = getFieldsMock();
    const filters = getFiltersMock();
    const modelInstance = new Model({ model, fields });

    const count = await modelInstance.count({ filters });

    expect(count).toBe(10);
  });

  it('should throw an error counting documents', () => {
    const model = getModelMock();
    const error = new Error('mock-error');
    model.countDocuments.mockImplementation((fields, callback) => {
      callback(error);
    });
    const fields = getFieldsMock();
    const filters = getFiltersMock();
    const modelInstance = new Model({ model, fields });

    expect.assertions(1);
    return expect(modelInstance.count({ filters })).rejects.toEqual(error);
  });

  it('should find documents', async () => {
    const model = getModelMock();
    model.find.mockImplementation((filters, fields, options, callback) => {
      callback(null, getDocumentsMock());
    });
    const fields = getFieldsMock();
    const filters = getFiltersMock();
    const pagination = getPaginationMock();
    const modelInstance = new Model({ model, fields });

    const documents = await modelInstance.find({ filters, pagination });

    expect(documents).toEqual(getDocumentsMock());
    expect(model.find).toHaveBeenCalledTimes(1);
    expect(model.find).toHaveBeenCalledWith(filters, fields, {
      limit: 10,
      skip: 10,
      sort: { name: 1 },
    }, expect.any(Function));
  });

  it('should throw an error finding documents', () => {
    const model = getModelMock();
    const error = new Error('mock error');
    model.find.mockImplementation((filters, fields, options, callback) => {
      callback(error);
    });
    const fields = getFieldsMock();
    const filters = getFiltersMock();
    const pagination = getPaginationMock();
    const modelInstance = new Model({ model, fields });

    expect.assertions(1);
    return expect(modelInstance.find({ filters, pagination })).rejects.toEqual(error);
  });

  it('should get document by id', async () => {
    const model = getModelMock();
    model.findById.mockImplementation((id, callback) => {
      callback(null, [getDocumentsMock()]);
    });
    const id = 'mock-id';
    const fields = getFieldsMock();
    const modelInstance = new Model({ model, fields });

    const document = await modelInstance.getById(id);

    expect(document).toEqual([getDocumentsMock()]);
    expect(model.findById).toHaveBeenCalledTimes(1);
    expect(model.findById).toHaveBeenCalledWith(id, expect.any(Function));
  });

  it('should throw an error when get document by id', () => {
    const model = getModelMock();
    const error = new Error('mock error');
    model.findById.mockImplementation((id, callback) => {
      callback(error);
    });
    const id = 'mock-id';
    const fields = getFieldsMock();
    const modelInstance = new Model({ model, fields });

    expect.assertions(1);
    return expect(modelInstance.getById(id)).rejects.toEqual(error);
  });

  it('should create new document', async () => {
    const model = MockModelClassSaveWithSuccess;
    const args = { args: true };
    const fields = getFieldsMock();
    const modelInstance = new Model({ model, fields });

    const document = await modelInstance.create(args);

    expect(document).toEqual([getDocumentsMock()]);
  });

  it('should throw an error when create new document', () => {
    const model = MockModelClassSaveWithError;
    const args = { args: true };
    const fields = getFieldsMock();
    const modelInstance = new Model({ model, fields });

    expect.assertions(1);
    return expect(modelInstance.create(args)).rejects.toEqual(new Error('mock-error'));
  });

  it('should find by id and update document', async () => {
    const model = getModelMock();
    model.findByIdAndUpdate.mockImplementation((id, fieldsToUpdate, options, callback) => {
      callback(null, [getDocumentsMock()]);
    });
    const id = 'id-mock';
    const fields = getFieldsMock();
    const fieldsToUpdate = { args: 'mock' };
    const modelInstance = new Model({ model, fields });

    const document = await modelInstance.updateDocumentById(id, fieldsToUpdate);

    expect(document).toEqual([getDocumentsMock()]);
    expect(model.findByIdAndUpdate).toHaveBeenCalledTimes(1);
    expect(model.findByIdAndUpdate)
      .toHaveBeenCalledWith(id, fieldsToUpdate, { new: true }, expect.any(Function));
  });

  it('should throw an error when find by id and update document by id', () => {
    const model = getModelMock();
    const error = new Error('mock-error');
    model.findByIdAndUpdate.mockImplementation((id, fieldsToUpdate, options, callback) => {
      callback(error);
    });
    const id = 'id-mock';
    const fields = getFieldsMock();
    const options = { args: 'mock' };
    const modelInstance = new Model({ model, fields });

    expect.assertions(1);
    return expect(modelInstance.updateDocumentById(id, options)).rejects.toEqual(error);
  });

  it('should should delete document logical', async () => {
    const model = getModelMock();
    model.findByIdAndUpdate.mockImplementation((id, fieldsToUpdate, options, callback) => {
      callback(null, [getDocumentsMock()]);
    });
    const id = 'id-mock';
    const fields = getFieldsMock();
    const fieldsToUpdate = { deleted: true };
    const modelInstance = new Model({ model, fields });

    const document = await modelInstance.deleteDocumentById(id);

    expect(document).toEqual([getDocumentsMock()]);
    expect(model.findByIdAndUpdate).toHaveBeenCalledTimes(1);
    expect(model.findByIdAndUpdate)
      .toHaveBeenCalledWith(id, fieldsToUpdate, { new: true }, expect.any(Function));
  });

  it('should throw an error when delete document logical', () => {
    const model = getModelMock();
    const error = new Error('mock-error');
    model.findByIdAndUpdate.mockImplementation((id, fieldsToUpdate, options, callback) => {
      callback(error);
    });
    const id = 'id-mock';
    const fields = getFieldsMock();
    const modelInstance = new Model({ model, fields });

    expect.assertions(1);
    return expect(modelInstance.deleteDocumentById(id)).rejects.toEqual(error);
  });
});
