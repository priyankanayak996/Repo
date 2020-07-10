const express = require('express');
const router = express.Router();
const User = require('./Models/User');
const {addUserValidation} = require('./Validation/user.validation');
const { schema } = require('./Models/User');



router.get('/user' ,function (req, res) {
    res.send({
        type: 'GET'
    });
});

router.post('/user',addUserValidation, function (req, res) {

    User.create(req.body).then(function (user) {

        res.send(user);
        /*console.log(req.body);
   console.log(req.headers);
    


    
    
   res.send({

    body:req.body,
    headers:req.headers*/




    });
});


module.exports = router;