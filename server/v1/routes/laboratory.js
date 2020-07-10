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

  },
  location: {
    type: String,

  },
});

const laboratory = mongoose.model('lab', laboratorySchema);
module.exports = laboratory;