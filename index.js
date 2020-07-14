const express = require('express');
const bodyParser = require('body-parser');

const api = require('./server/v1/routes/api');

// set up express app
const app = express();

app.use(bodyParser.json());

app.use('/v1/', api);

// listen for request
app.listen(process.env.port || 3001, () => {
  console.log('now listening for request');
});
