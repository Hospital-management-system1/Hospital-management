const  express = require('express');
const loginRouter = express.Router();
const {getAdmin, postAdmin, loginAdmin, tokenVeification, finalVerification,logoutAdmin} = require('../../controller/login/login');



loginRouter.get('/getAdmin',getAdmin);
loginRouter.post('/postAdmin',postAdmin);
loginRouter.post('/loginAdmin',loginAdmin);
loginRouter.get('/loginVerify',tokenVeification, finalVerification);
loginRouter.post('/logoutAdmin',logoutAdmin);
module.exports = loginRouter;