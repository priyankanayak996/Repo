const express = require('express');

const router = express.Router();

const internsTraining = require('../model/internTraining');

const {
  addUserValidation,
} = require('../validation/user.validation');

const Laboratory = require('./laboratory');

router.get('/internTraining', (req, res) => {
  res.send({

    type: 'GET',

  });
});

router.post('/internTraining', addUserValidation, (req, res) => {
  internsTraining.create(req.body).then((internTraining) => {
    res.send(internTraining);

    /* console.log(req.body);

   console.log(req.headers);

   res.send({

    body:req.body,

    headers:req.headers */
  });
});

// Get

router.get('/laboratory', async (req, res) => {
  try {
    const labs = await Laboratory.find();

    res.json(labs);
  } catch (err) {
    res.send(err);
  }
});

// Post

router.post('/laboratory', async (req, res) => {
  const lab = new Laboratory({

    first_name: req.body.first_name,

    last_name: req.body.last_name,

    id: req.body.id,

    location: req.body.location,

  });

  try {
    const saveLab = await lab.save();

    res.json(saveLab);
  } catch (err) {
    res.send(err);
  }
});

// Put

router.put('/laboratory/:id', async (req, res) => {
  try {
    const updateLab = await Laboratory.findByIdAndDelete({

      _id: req.params.id,

    });

    res.json(updateLab);
  } catch (err) {
    res.json(err);
  }
});

// Delete

router.delete('/laboratory/:id', async (req, res) => {
  try {
    const removedLab = await Laboratory.remove({

      _id: req.params.id,

    });

    res.json(removedLab);
  } catch (err) {
    res.json(err);
  }
});

// patch

router.patch('/laboratory/:id', async (req, res) => {
  try {
    const updatedLab = await Laboratory.updateOne({

      _id: req.params.id,

    }, {

      $set: {

        first_name: req.body.first_name,

      },

    });

    res.json(updatedLab);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
