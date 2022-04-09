const {
  UNAUTHORIZED,
} = require('../../http-status-codes');
const HttpError = require('../../http-error');

function buildUnauthorizedResponse(e) {
  return Promise.reject(new HttpError(UNAUTHORIZED, e.message));
}

module.exports = {
  buildUnauthorizedResponse,
};
