const express = require('express');

const router = express.Router();
const User = require('./Models/User');
const { addUserValidation } = require('./Validation/user.validation');

router.get('/user', (req, res) => {
  res.send({
    type: 'GET',
  });
});

router.post('/user', addUserValidation, (req, res) => {
  User.create(req.body).then((user) => {
    res.send(user);
    /* console.log(req.body);
   console.log(req.headers);

   res.send({

    body:req.body,
    headers:req.headers */
  });
});

module.exports = router;
