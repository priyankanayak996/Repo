const express = require('express');

const router = express.Router();
const userController = require('../controllers/components/userController');
const laboratoryController = require('../controllers/components/laboratoryController');

const {
  addUserValidation,
} = require('../validation/user.validation');

// For user model

router
  .router('/user')
  .post(laboratoryController.postUser, addUserValidation)
  .get(userController.getUser);

// For laboratory model
router
  .router('/laboratory')
  .get(laboratoryController.getLaboratory)
  .post(laboratoryController.postLaboratory);

router
  .router('laboratory/:id')
  .put(laboratoryController.putLaboratory)
  .delete(laboratoryController.deleteLaboratory)
  .patch(laboratoryController.patchLaboratory);

module.exports = router;
