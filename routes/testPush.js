const { default: Expo } = require('expo-server-sdk')
const { find } = require('../db');

const expo = new Expo();
module.exports = async function (req, res) {

  const tokenCursor= await find('push_tokens');
  const tokenRecords = await tokenCursor.toArray();

  const messages = [];
  tokenRecords.forEach((trec) => {
    const { token } = trec;

    if (!Expo.isExpoPushToken(token)) {
      console.error(`Push token ${token} is not a valid Expo push token`);
      return;
    }

    // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications.html)
    messages.push({
      to: token,
      sound: 'default',
      body: 'This is a test notification',
      data: { withSome: 'data' },
    });
  });

  await expo.sendPushNotificationsAsync(messages);

  return res.json({ success: true })
}
