const { user } = require('./userschemaj');

module.exports = {
  addUserValidation: async (req, res) => {
    const { error } = await user.validate(req.body);
    if (error) {
      res.status(422).send(error.details);
    } else {
      res.status(200).send('Validated');
    }
  },

};
