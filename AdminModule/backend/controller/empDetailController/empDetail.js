const connection = require('../../model/dbconfig.js');

const getEmpDetail = (req,res) => {
    let sql = 'SELECT *FROM emp_profile';
    connection.query(sql,(error,result)=>{
        if(error)
            console.log("ERROR...",error.sqlMessage)
        else
            res.send(result.rows);
    })
}

const postEmpDetail = (req,res) => {
    let {emp_id, address, contact, gender, dob} = req.body;
    let sql = 'INSERT INTO emp_profile (emp_id, address, contact , gender, dob) VALUES ($1, $2, $3, $4, $5)';
    connection.query(sql, [emp_id, address, contact, gender, dob], (err,result)=>{
        if(err)
            console.log("error", err.sqlMessage);
        else
            res.send(result);
    })
}

const updateEmpDetail = (req,res)=>{
    let profile_id = req.params.profile_id;
    let { address, contact } = req.body;
    let sql = "UPDATE emp_profile SET address = $1 , contact = $2 WHERE profile_id = $3";
    connection.query(sql, [address, contact, profile_id], function( error, result ){
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}

const deleteEmpDetail = (req,res) =>{
    let data = req.params.id;
    let sql = "DELETE FROM emp_profile WHERE profile_id = $1";
    connection.query(sql,[data],(error,result)=>{
        if(error)
            console.log("error...",error.sqlMessage)
        else
            res.send(result)
    })
}


module.exports = { getEmpDetail, postEmpDetail, updateEmpDetail, deleteEmpDetail };