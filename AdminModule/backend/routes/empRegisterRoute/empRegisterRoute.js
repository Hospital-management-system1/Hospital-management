const express = require("express");
const empRegisterRouter = express.Router();
const upload = require("../../model/multerConfig.js");
const Validation = require("../../controller/empRegisterController/empValidation.js");
const {
  getEmp,
  postEmp,
  updateEmp,
  deleteEmp,
} = require("../../controller/empRegisterController/empRegister");

empRegisterRouter.get("/getEmp", getEmp);
// empRegisterRouter.post('/postEmp',Validation,postEmp);
empRegisterRouter.patch("/updateEmp/:emp_id", updateEmp);
empRegisterRouter.delete("/deleteEmp/:id", deleteEmp);
empRegisterRouter.post("/postEmp", upload.single("image"), Validation, postEmp);

module.exports = empRegisterRouter;
