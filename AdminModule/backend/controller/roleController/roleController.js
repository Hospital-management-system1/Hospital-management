const connection = require('../../model/dbconfig');

const getRole = (req,res)=> {
    let sql = 'SELECT *FROM role ORDER BY role_id';
    connection.query(sql,(error,result)=>{
        if(error)
            console.log("Error",error.sqlMessage)
        else
            res.send(result.rows);
    })
}

const postRole = (req,res)=> {
    let {role_id,role_name}= req.body;
    let sql = 'INSERT INTO role (role_id, role_name) VALUES ($1,$2)'    
    connection.query(sql,[role_id,role_name],(error,result)=>{
        if(error)
            console.log("Error",error.sqlMessage)
        else
            res.send(result);
    })
}

const updateRole = (req,res)=>{
    let role_id = req.params.role_id;
    let  {role_name} = req.body;
    const sql = "UPDATE role SET role_name = $1 WHERE role_id = $2";
    connection.query(sql,[role_name,role_id],(error,result)=>{
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}



const deleteRole = (req,res)=> {
    let role_id = req.params.role_id;
    let sql = 'DELETE FROM role WHERE role_id= $1';    
    connection.query(sql,[role_id],(error,result)=>{
        if(error)
            console.log("Error",error.sqlMessage)
        else
            res.send(result);
    })
}


module.exports = {getRole, postRole,updateRole, deleteRole};