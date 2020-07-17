// const jwt = require('jsonwebtoken');
const User = require('../../model/components/user');

module.exports.getUser = (req, res) => {
  res.send({

    type: 'GET',

  });
};

module.exports.postUser = (req, res) => {
  User.create(req.body).then((user) => {
    //  const token = jwt.sign({ _id: user._id,process.env.TOKEN_SECRET });
    // res.header(token).send(token);
    res.send(user);

    /* console.log(req.body);

   console.log(req.headers);

   res.send({

    body:req.body,

    headers:req.headers */
  });
};
