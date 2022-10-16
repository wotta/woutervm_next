const crypto = require("crypto");

module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', crypto.randomBytes(16).toString('base64'))
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '147437602ea52ea22e20b5630a591079'),
  },
});
