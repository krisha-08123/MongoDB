const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validate = require('../middleware/validate');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', validate.validateProduct, productController.createProduct);
router.put('/:id', validate.validateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
