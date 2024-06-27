const connection = require('../../model/dbconfig');

const getLab = (req,res) => {
    let sql = 'SELECT *FROM lab';
    connection.query(sql,(error,result)=>{
        if(error)
            console.log("ERROR...",error.sqlMessage)
        else
            res.send(result.rows);
    })
}

const postLab= (req,res) => {
    let {lab_id, lab_name, room_id} = req.body;
    let sql = "INSERT INTO lab (lab_id, lab_name, room_id) VALUES ($1, $2, $3)"
    connection.query(sql,[lab_id, lab_name, room_id],function(error,result){
        if(error)
            console.log("Error...",error.sqlMessage)
        else
            res.send(result);
    })
}

const updateLab = (req,res)=>{
    let lab_id = req.params.lab_id;
    let {lab_name,room_id} = req.body;
    let sql = "UPDATE lab SET lab_name = $1 , room_id = $2 WHERE lab_id = $3";
    connection.query(sql,[lab_name,room_id,lab_id],function(error,result){
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}

const deleteLab = (req,res) =>{
    let data = req.params.id;
    let sql = "DELETE FROM lab WHERE lab_id = $1";
    connection.query(sql,[data],(error,result)=>{
        if(error)
            console.log("error...",error.sqlMessage)
        else
            res.send(result)
    })
}





module.exports = { getLab, postLab, updateLab, deleteLab };