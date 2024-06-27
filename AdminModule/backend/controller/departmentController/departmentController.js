const connection = require('../../model/dbconfig.js');

const getDepartment = (req,res) => {
    let sql = 'SELECT *FROM department ORDER BY dept_id';
    connection.query(sql,(error,result)=>{
        if(error)
            console.log("ERROR...",error.sqlMessage)
        else
            res.send(result.rows);
    })
}

const postDepartment = (req,res) => {
    let {dept_id, dept_name, room_id} = req.body;
    let sql = "INSERT INTO department (dept_id, dept_name, room_id) VALUES ($1, $2, $3)"
    connection.query(sql,[dept_id, dept_name, room_id],function(error,result){
        if(error)
            console.log("Error...",error.sqlMessage)
        else
            res.send(result);
    })
}

const updateDepartment = (req,res)=>{
    let dept_id = req.params.dept_id;
    let {dept_name,room_id} = req.body;
    let sql = "UPDATE department SET dept_name = $1 , room_id = $2 WHERE dept_id = $3";
    connection.query(sql,[dept_name,room_id,dept_id],function(error,result){
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}

const deleteDepartment = (req,res) =>{
    let data = req.params.id;
    let sql = "DELETE FROM department WHERE dept_id = $1";
    connection.query(sql,[data],(error,result)=>{
        if(error)
            console.log("error...",error.sqlMessage)
        else
            res.send(result)
    })
}





module.exports = { getDepartment, postDepartment,updateDepartment,  deleteDepartment };