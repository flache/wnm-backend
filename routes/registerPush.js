const { update } = require('../db');

module.exports = async function (req, res) {
  const { token, deviceId } = req.body;

  if (!token) {
    return res.status(400).json({
      error: 'token is required'
    });
  }
  update('push_tokens', { deviceId }, { $set: { token } }, { upsert: true });

  return res.json({ success: true })
}
