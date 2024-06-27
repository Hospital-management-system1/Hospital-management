const express = require('express');
const labRouter = express.Router();

const {getLab , postLab, updateLab, deleteLab} = require('../../controller/labController/labController.js')

labRouter.get('/getLab',getLab);
labRouter.post('/postLab',postLab);
labRouter.patch('/updateLab/:lab_id',updateLab);
labRouter.delete('/deleteLab/:id',deleteLab);

module.exports = labRouter;