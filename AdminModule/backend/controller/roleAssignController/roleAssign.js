const connection = require('../../model/dbconfig.js');

const getAssign = (req,res) => {
    let sql = 'SELECT *FROM role_assign';
    connection.query(sql,(error,result)=>{
        if(error)
            console.log("ERROR...",error.sqlMessage)
        else
            res.send(result.rows);
    })
}

const postAssign = (req,res) => {
    let {role_id, emp_id} = req.body;
    let sql = "INSERT INTO role_assign ( role_id, emp_id) VALUES ($1, $2)";
    connection.query(sql,[role_id, emp_id],function(error,result){
        if(error)
            console.log("Error...",error.sqlMessage)
        else
            res.send(result);
    })
}

const updateAssign = (req,res)=>{
    let assign_id = req.params.assign_id;
    let {role_id,emp_id} = req.body;
    let sql = "UPDATE role_assign SET role_id = $1 , emp_id = $2 WHERE assign_id = $3";
    connection.query(sql,[role_id, emp_id, assign_id],function(error,result){
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}

const deleteAssign = (req,res) =>{
    let data = req.params.id;
    let sql = "DELETE FROM role_assign WHERE assign_id = $1";
    connection.query(sql,[data],(error,result)=>{
        if(error)
            console.log("error...",error.sqlMessage)
        else
            res.send(result)
    })
}

const getSingleRoleAssign = (req, res) => {
    let emp_id = req.params.emp_id;
    let query = "SELECT emp_id, role_id FROM role_assign WHERE emp_id=$1";
    connection.query(query, [emp_id], (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(result.rows);
        console.log(result.rows);
      }
    });
  };

  const deleteRoleAssign = (req, res) => {
    let { role_id, emp_id } = req.params;
    let query = "DELETE FROM role_assign WHERE role_id = $1 AND emp_id = $2";
    connection.query(query, [role_id, emp_id], (err, result) => {
      if (err) {
        res.send(err);
        console.log(err.sqlMessage);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  };


module.exports = {getAssign, postAssign, updateAssign, deleteAssign, getSingleRoleAssign, deleteRoleAssign};