const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validate = require('../middleware/validate');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', validate.validateUser, userController.createUser);
router.put('/:id', validate.validateUser, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
