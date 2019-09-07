require('dotenv').config();
const express = require('express');
const cors = require('cors');
const registerPush = require('./routes/registerPush');
const testPush = require('./routes/testPush');




const app = express();

app.use(express.json());
app.use(cors());





app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/register_push', registerPush)
app.post('/test_push', testPush)


app.listen(process.env.PORT || 8081, function () {
  console.log('Example app listening on port 3000!');
});
