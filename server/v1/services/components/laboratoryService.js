const Laboratory = require('../../controllers/components/laboratoryController');
// module.exports.getLaboratoryService = async (lab) => {
//     try {
//         const labs = await Laboratory.find();

//         res.json(labs);
//     } catch (err) {
//         res.send(err);
//     }
// };

module.exports.postLaboratoryService = async (labInfo) => {
  const lab = new Laboratory({

    lab_name: labInfo.lab_name,

    lab_location: labInfo.lab_location,

    organisation: labInfo.organisation,

    lab_type: labInfo.lab_type,
    department: labInfo.department,

  });

  try {
    const saveLab = await lab.save();

    return saveLab;
  } catch (err) {
    return err;
  }
};

// module.exports.putLaboratoryService = async (req, res) => {
//     try {
//         const updateLab = await Laboratory.findByIdAndDelete({

//             _id: req.params.id,

//         });

//         res.json(updateLab);
//     } catch (err) {
//         res.json(err);
//     }
// };

// module.exports.deleteLaboratoryService = async (req, res) => {
//     try {
//         const removedLab = await Laboratory.remove({

//             _id: req.params.id,

//         });

//         res.json(removedLab);
//     } catch (err) {
//         res.json(err);
//     }
// };

// module.exports.patchLaboratoryService = async (req, res) => {
//     try {
//         const updatedLab = await Laboratory.updateOne({

//             _id: req.params.id,

//         }, {

//             $set: {

//                 first_name: req.body.first_name,

//             },

//         });

//         res.json(updatedLab);
//     } catch (err) {
//         res.json(err);
//     }
// };
