const express = require('express');
const presRouter = express.Router();
const {getPres, postPres, updatePres, deletePres}  = require('../../controller/presciptionController/presController.js')

presRouter.get('/getPres',getPres);
presRouter.post('/postPres',postPres);
presRouter.patch('/updatePres/:prescription_id',updatePres)
presRouter.delete('/deletePres/:id',deletePres);





module.exports = presRouter;
