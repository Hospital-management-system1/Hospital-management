const express = require('express');
const roleAssignRouter = express.Router();

const {getAssign, postAssign, updateAssign, deleteAssign, getSingleRoleAssign, deleteRoleAssign} = require('../../controller/roleAssignController/roleAssign');

roleAssignRouter.get('/getAssign',getAssign);
roleAssignRouter.post('/postAssign' ,postAssign) ;
roleAssignRouter.patch('/updateAssign/:assign_id',updateAssign);
roleAssignRouter.delete('/deleteAssign/:id',deleteAssign);
roleAssignRouter.get('/getSingleRoleAssign/:emp_id', getSingleRoleAssign);
roleAssignRouter.delete('/deleteRoleAssign/:role_id/:emp_id',deleteRoleAssign)


module.exports = roleAssignRouter;
