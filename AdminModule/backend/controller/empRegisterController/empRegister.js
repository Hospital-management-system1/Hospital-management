const connection = require("../../model/dbconfig.js");

const getEmp = (req, res) => {
  let sql = "SELECT *FROM emp_register ORDER BY emp_id";
  connection.query(sql, (error, result) => {
    if (error) console.log("ERROR...", error.sqlMessage);
    else res.send(result.rows);
  });
};

const postEmp = (req, res) => {
  var fullUrl = req.protocol + "://" + req.get("host") + "/images/";
  let data = {
    emp_id: req.body.emp_id,
    emp_name: req.body.emp_name,
    email: req.body.email,
    password: req.body.password,
    img: fullUrl+req.file.filename,
    
  };
  let values = [
    data.emp_id,
    data.emp_name,
    data.email,
    data.password,
    data.img,
    
  ];
  let sql =
    "INSERT INTO emp_register (emp_id, emp_name, email, password, img) VALUES ($1, $2, $3, $4, $5)";
  connection.query(sql, values, function (error, result) {
    if (error) console.log("Error...", error);
    else res.send(result);
  });
};

const updateEmp = (req, res) => {
  let emp_id = req.params.emp_id;
  let { emp_name, password } = req.body;
  let sql =
    "UPDATE emp_register SET emp_name = $1 ,  password  = $2 WHERE emp_id = $3";
  connection.query(sql, [emp_name, password, emp_id], function (error, result) {
    if (error) console.log("ERROR", error.sqlMessage);
    else res.send(result);
  });
};

const deleteEmp = (req, res) => {
  let data = req.params.id;
  let sql = "DELETE FROM emp_register WHERE emp_id = $1";
  connection.query(sql, [data], (error, result) => {
    if (error) console.log("error...", error.sqlMessage);
    else res.send(result);
  });
};

module.exports = { getEmp, postEmp, updateEmp, deleteEmp };
