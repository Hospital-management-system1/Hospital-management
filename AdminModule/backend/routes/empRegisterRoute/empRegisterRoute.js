const express = require("express");
const empRegisterRouter = express.Router();
const upload = require("../../model/multerConfig.js");
const Validation = require("../../controller/empRegisterController/empValidation.js");
const {
  getEmp,
  postEmp,
  updateEmp,
  deleteEmp,
  getDoctors
} = require("../../controller/empRegisterController/empRegister");

empRegisterRouter.get("/getEmp", getEmp);
empRegisterRouter.get("/getdoctors", getDoctors);
empRegisterRouter.post("/postEmp", upload.single("image"),  postEmp);
// empRegisterRouter.post('/postEmp',Validation,postEmp);
empRegisterRouter.patch("/updateEmp/:emp_id", updateEmp);
empRegisterRouter.delete("/deleteEmp/:id", deleteEmp);

module.exports = empRegisterRouter;
