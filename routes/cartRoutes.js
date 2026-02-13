const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const validate = require('../middleware/validate');

router.get('/', cartController.getCart);
router.post('/', validate.validateCart, cartController.addToCart);
router.put('/:id', cartController.updateCartItem);
router.delete('/:id', cartController.deleteCartItem);

module.exports = router;
