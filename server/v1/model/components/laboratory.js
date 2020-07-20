const mongoose = require('mongoose');

const { Schema } = mongoose;

const laboratorySchema = new Schema({
  lab_name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  lab_location: {
    type: String,
  },
  organisation: {
    type: String,

  },
  department: {
    type: String,

  },
  lab_type: {
    type: String,

  },
});
module.exports = mongoose.model('laboratory', laboratorySchema);
