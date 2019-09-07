const { insertOne } = require('../db');

module.exports = async function (req, res) {
  const { token } = req.body

  if (!token) {
    return res.status(400).json({
      error: 'token is required'
    });
  }
  insertOne('push_tokens', { token });

  return res.json({ success: true })
}
