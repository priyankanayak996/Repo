const express = require('express');

const router = express.Router();
const User = require('../model/User');
const { addUserValidation } = require('../validation/user.validation');
const laboratory = require('./laboratory');

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
router.get('/lab', (req, res) => {
  res.send({
    type: 'GET',
  });
});

router.post('/lab', (req, res) => {
  laboratory.create(req.body).then((user) => {
    res.send(user);
  });
});
module.exports = router;
