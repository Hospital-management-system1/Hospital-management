const express = require('express');
const departmentRouter = express.Router();

const {getDepartment, postDepartment,updateDepartment, deleteDepartment} = require('../../controller/departmentController/departmentController.js');

departmentRouter.get('/getDepartment',getDepartment);
departmentRouter.post('/postDepartment',postDepartment);
departmentRouter.patch('/updateDepartment/:dept_id',updateDepartment);
departmentRouter.delete('/deleteDepartment/:id',deleteDepartment);


module.exports = departmentRouter;
