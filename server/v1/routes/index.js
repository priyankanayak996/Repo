const express = require('express');
const bodyParser = require('body-parser');

const api = require('./api');

// set up express app
const app = express();

app.use(bodyParser.json());

app.use('/v1/api', api);
