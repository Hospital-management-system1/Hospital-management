const express = require('express');
const roleRouter = express.Router();

const {getRole, postRole, updateRole ,deleteRole } = require('../../controller/roleController/roleController.js');


roleRouter.get('/getRole',getRole);
roleRouter.post('/postRole',postRole);
roleRouter.patch('/updateRole/:role_id',updateRole)
roleRouter.delete('/deleteRole/:role_id',deleteRole);


module.exports= roleRouter;