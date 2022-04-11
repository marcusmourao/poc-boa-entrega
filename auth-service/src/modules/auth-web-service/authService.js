const { createHmac } = require('crypto');
const jwt = require('jsonwebtoken');
const {
  CREATED,
} = require('../../core/http-status-codes');
const {
  buildUnauthorizedResponse,
} = require('../../core/helpers/response-builders/unauthorized');

const authRepository = require('./authRepository');

async function login({ username, password }) {
  try {
    const encryptedPassword = createHmac('sha256', process.env.PASSWORD_SALT)
      .update(password)
      .digest('hex');
    const user = await authRepository.login({
      username,
      password: encryptedPassword,
    });
    delete user.password;
    const jwtToken = jwt.sign(user, process.env.JWT_SECRET);
    return { statusCode: CREATED, token: jwtToken, user };
  } catch (e) {
    return buildUnauthorizedResponse(e);
  }
}

module.exports = {
  login,
};
