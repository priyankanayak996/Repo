const joi = require('@hapi/joi');

const schema = {
  user: joi.object({
    first_name: joi.string().max(100).required(),
    last_name: joi.string().max(100).required(),
    email: joi.string().email().required(),
    role: joi.string().max(100).required(),
    ph_number: joi.number().min(1000000000).message('Invalid mobile number').max(9999999999)
      .message('Invalid number')
      .required(),
  }),
};

module.exports = schema;
