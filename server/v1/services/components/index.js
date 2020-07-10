const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./api');

// set up express app
const app = express();

mongoose.connect('mongodb://localhost/user');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', api);

// listen for request
app.listen(process.env.port || 4000, () => {
  console.log('now listening for request');
});

app.get('/user',(res,req)=>{

})