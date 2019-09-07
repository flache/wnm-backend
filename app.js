require('dotenv').config();
const express = require('express');
const cors = require('cors');
const registerPush = require('./routes/registerPush');




const app = express();

app.use(express.json());
app.use(cors());





app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/register_push', registerPush)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
