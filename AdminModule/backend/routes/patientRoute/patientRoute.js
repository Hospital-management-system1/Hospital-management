const express = require('express');
const patientRouter = express.Router();

const {getPatient, postPatient, updatePatient, deletePatient} = require('../../controller/patientController/patientController');

patientRouter.get('/getPatient',getPatient);
patientRouter.post('/postPatient' ,postPatient) ;
patientRouter.patch('/updatePatient/:patient_id',updatePatient);
patientRouter.delete('/deletePatient/:id',deletePatient);


module.exports = patientRouter;
