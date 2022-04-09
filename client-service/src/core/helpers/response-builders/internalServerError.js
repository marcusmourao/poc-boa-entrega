const {
  INTERNAL_SERVER_ERROR,
} = require('../../http-status-codes');
const HttpError = require('../../http-error');

function buildInternalServerErrorResponse() {
  return Promise.reject(new HttpError(INTERNAL_SERVER_ERROR, 'Internal server error'));
}

module.exports = {
  buildInternalServerErrorResponse,
};
