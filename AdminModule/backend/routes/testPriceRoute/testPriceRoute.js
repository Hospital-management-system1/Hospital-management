const express = require('express');
const testPriceRouter = express.Router();
const {getPrice, postPrice, updatePrice, deletePrice}  = require('../../controller/testPriceController/testPriceController')

testPriceRouter.get('/getPrice',getPrice);
testPriceRouter.post('/postPrice',postPrice);
testPriceRouter.patch('/updatePrice/:test_id',updatePrice)
testPriceRouter.delete('/deletePrice/:id',deletePrice);


module.exports = testPriceRouter;
