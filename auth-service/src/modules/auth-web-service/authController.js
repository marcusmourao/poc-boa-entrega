const authService = require('./authService');

async function login(req, res) {
  try {
    const {
      username, password,
    } = req.body;
    const { statusCode, token, user } = await authService.login({
      username, password,
    });
    res.status(statusCode).json({ token, user });
  } catch (error) {
    res.status(error.statusCode).json({ errorMessage: error.message });
  }
}

module.exports = {
  login,
};
