const { normalizeDocument } = require('.');

function getDocumentMock() {
  return {
    toObject: () => ({
      _id: 'mock-id',
      name: 'mock name',
      description: 'mock description',
    }),
  };
}

describe('normalizeDocument', () => {
  it('should normalize document', () => {
    expect(normalizeDocument(getDocumentMock())).toEqual({
      id: 'mock-id',
      name: 'mock name',
      description: 'mock description',
    });
  });
  it('should return null when is not document document', () => {
    expect(normalizeDocument(null)).toBe(null);
  });
});
