const express = require('express');
const cors = require('cors')
const app = express();
const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
app.use(express.json());
app.use(cors());
const port = 5999;
const roomRouter = require('../backend/routes/roomRoute/roomRoute');
const departmentRouter = require('../backend/routes/departmentRoute/departmentRoute');
const roleRouter = require('../backend/routes/roleRoute/roleRoute');
const labRouter = require('../backend/routes/labRoute/labRoute.js');
const testPriceRouter = require('../backend/routes/testPriceRoute/testPriceRoute.js');
const empRegisterRouter = require('../backend/routes/empRegisterRoute/empRegisterRoute.js');
const roleAssignRouter = require('../backend/routes/roleAssignRoute/roleAssignRoute.js');
const empDetailRouter = require('./routes/empDetailRoute/empDetailsRoute.js');
const patientRouter = require('../backend/routes/patientRoute/patientRoute.js');
const presRouter = require('../backend/routes/prescriptionRoute/presRoute.js');
const loginRouter = require('../backend/routes/loginRoutes/loginRoutes.js')



app.use('/',loginRouter)
app.use('/',roomRouter);
app.use('/',departmentRouter);
app.use('/',roleRouter);
app.use('/',labRouter);
app.use('/',testPriceRouter);
app.use('/',empRegisterRouter);
app.use('/',roleAssignRouter);
app.use('/',empDetailRouter);
app.use('/',patientRouter);
app.use('/',presRouter);




const option = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Node.js API documentation for Hospital management",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:5999",
        },
      ],
    },
    apis: [
      "./routes/roomRoute/roomRoute.js",
    ],
  };
  
  app.use("/testing", swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)));


app.use("/images", express.static("Images"));

app.listen(port,()=>{
    console.log(`port is running on ${port} port`)
})