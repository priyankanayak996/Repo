const LabServices = require('../../services/components/laboratoryService');
require('../../model/components/laboratory');

// module.exports.getLaboratory = async (req, res) => {

//   const [error, labInfo] = LabServices.getLaboratoryService(req.headers);

// };
module.exports.postLaboratory = async (req, res) => {
  const params = req.body;

  const [error, labInfo] = await LabServices.postLaboratoryService(params);
  if (error) {
    res.status(500);
  }
  res.send(labInfo, {
    body: params.labInfo,

  });
};

// module.exports.putLaboratory = async (req, res) => {
//   const [] = LabServices.putLaboratoryService(req.headers);
// };

// module.exports.deleteLaboratory = async (req, res) => {
//   const [] = LabServices.deleteLaboratoryService(req.headers);
// };

// module.exports.patchLaboratory = async (req, res) => {
//   const [] = LabServices.patchLaboratoryService(req.headers);

// };
