const express = require('express');

const ProductController = require('../controller/product.js')

const router = express.Router()

//create db - post method
router.post('/', ProductController.createNewProduct)

//read db - get method
router.get('/', ProductController.getAllProduct)

//update db - put method
router.patch('/:idProduct', ProductController.updateProduct)

//delele - delete
router.delete('/:idProduct', ProductController.deleteProduct)

module.exports = router;