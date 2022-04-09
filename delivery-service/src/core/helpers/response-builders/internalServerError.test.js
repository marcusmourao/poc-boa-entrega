const { buildInternalServerErrorResponse } = require('./internalServerError');
const HttpError = require('../../http-error');

const getErrorMock = () => new HttpError(500, 'Internal server error');

describe('responseBuilders::internalServerError', () => {
  it('should build internal server error response', () => {
    expect(buildInternalServerErrorResponse()).rejects.toEqual(getErrorMock());
  });
});
