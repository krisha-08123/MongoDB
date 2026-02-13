const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const validate = require('../middleware/validate');

router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.post('/', validate.validateOrder, orderController.createOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
