const Laboratory = require('../../model/components/laboratory');

module.exports.getLaboratory = async (req, res) => {
  try {
    const labs = await Laboratory.find();

    res.json(labs);
  } catch (err) {
    res.send(err);
  }
};
module.exports.postLaboratory = async (req, res) => {
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
};

module.exports.putLaboratory = async (req, res) => {
  try {
    const updateLab = await Laboratory.findByIdAndDelete({

      _id: req.params.id,

    });

    res.json(updateLab);
  } catch (err) {
    res.json(err);
  }
};

module.exports.deleteLaboratory = async (req, res) => {
  try {
    const removedLab = await Laboratory.remove({

      _id: req.params.id,

    });

    res.json(removedLab);
  } catch (err) {
    res.json(err);
  }
};

module.exports.patchLaboratory = async (req, res) => {
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
};
