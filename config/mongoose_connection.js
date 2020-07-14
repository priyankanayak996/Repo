const mongoose = require('mongoose');

mongoose.connect(process.env.DB_Connect, {
  useNewUrlParser: true,
}, () => console.log('connected to Database'));
