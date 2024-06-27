const express = require('express');
const empDetailRouter  = express.Router();
const { getEmpDetail, postEmpDetail, updateEmpDetail, deleteEmpDetail } = require('../../controller/empDetailController/empDetail');

empDetailRouter.get('/getEmpDetail',getEmpDetail);
empDetailRouter.post('/postEmpDetail',postEmpDetail);
empDetailRouter.patch('/updateEmpDetail/:profile_id',updateEmpDetail);
empDetailRouter.delete('/deleteEmpDetail/:id',deleteEmpDetail);

module.exports = empDetailRouter;