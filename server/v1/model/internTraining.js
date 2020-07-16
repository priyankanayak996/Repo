const mongoose = require('mongoose');

const { Schema } = mongoose;

const internTrainingSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  last_name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  email: {
    type: String,

  },
  ph_number: {
    type: Number,

  },
});

const User = mongoose.model('training', internTrainingSchema);
module.exports = User;
