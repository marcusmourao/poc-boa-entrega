const {
  UNAUTHORIZED,
  INTERNAL_SERVER_ERROR,
} = require('../../http-status-codes');
const HttpError = require('../../http-error');

function buildUnauthorizedResponse(e) {
  return Promise.reject(new HttpError(UNAUTHORIZED, e.message));
}

function buildInternalServerErrorResponse(e) {
  return Promise.reject(new HttpError(INTERNAL_SERVER_ERROR, e.message));
}

module.exports = {
  buildUnauthorizedResponse,
  buildInternalServerErrorResponse,
};
