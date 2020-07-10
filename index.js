const express = require('express');
const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
const api = require('./api');
const joi = require('@hapi/joi');


//set up express app
const app = express();

mongoose.connect('mongodb://localhost/user');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', api);


//listen for request
app.listen(process.env.port || 4000, function () {
console.log('now listening for request');

});