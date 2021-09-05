//import express for router
const express = require('express');
const router = express.Router();
//import the product controller
const {getAllProducts, getProductById} = require('../controller/productControllers');

//@desc / route mean we want to get all our products
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@desc Get a product by Id from DB
//@route GET /api/products
//@access Public
router.get('/:id',getProductById)

//export the routes
module.exports = router;