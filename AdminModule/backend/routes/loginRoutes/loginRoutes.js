const  express = require('express');
const loginRouter = express.Router();
const {getAdmin, postAdmin, loginAdmin} = require('../../controller/login/login');



loginRouter.get('/getAdmin',getAdmin);
loginRouter.post('/postAdmin',postAdmin);
loginRouter.post('/loginAdmin',loginAdmin);

module.exports = loginRouter;