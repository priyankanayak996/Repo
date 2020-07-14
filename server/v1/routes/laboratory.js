const mongoose = require('mongoose');

const { Schema } = mongoose;

const laboratorySchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  last_name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  id: {
    type: Number,
    unique: true,
  },
  location: {
    type: String,

  },
});
module.exports = mongoose.model('laboratory', laboratorySchema);
