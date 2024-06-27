const connection = require('../../model/dbconfig.js')

const getRoom = (req,res) =>{
    let sql = "SELECT * FROM room ORDER BY room_id";
    connection.query(sql,function(error,result){
        if(error){
            console.log('error...',error.sqlMessage)
        }
        else{
            res.send(result.rows);
        }
    })
}

const addRoom = (req,res) => {
    let {room_id, room_name} = req.body;
    let sql = "INSERT INTO room (room_id, room_name) VALUES ($1, $2)"
    connection.query(sql,[room_id,room_name],function(error,result){
        if(error)
            console.log("Error...",error.sqlMessage)
        else
            res.send(result);
    })
}


const updateRoom = (req,res)=>{
    let room_id = req.params.room_id;
    let  {room_name} = req.body;
    const sql = "UPDATE room SET room_name = $1 WHERE room_id = $2";
    connection.query(sql,[room_name,room_id],(error,result)=>{
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}


const deleteRoom = (req,res) => {
    let data = req.params.id;
    let sql = "DELETE FROM room WHERE room_id=$1";
    connection.query(sql,[data],function(error,result){
        if(error)
        console.log("error...",error.sqlMessage)
        else
        res.send(result);
    })
}


module.exports = {getRoom , addRoom, updateRoom, deleteRoom};