const express = require('express');
const roleAssignRouter = express.Router();

const {getAppointment, postAppointment,} = require('../../controller/appointment/appointment');

roleAssignRouter.get('/getappointment',getAppointment);
roleAssignRouter.post('/postAppointment' ,postAppointment) ;
// roleAssignRouter.patch('/updateAssign/:assign_id',updateAssign);
// roleAssignRouter.delete('/deleteAssign/:id',deleteAssign);
// roleAssignRouter.get('/getSingleRoleAssign/:emp_id', getSingleRoleAssign);
// roleAssignRouter.delete('/deleteRoleAssign/:role_id/:emp_id',deleteRoleAssign)


module.exports = roleAssignRouter;
