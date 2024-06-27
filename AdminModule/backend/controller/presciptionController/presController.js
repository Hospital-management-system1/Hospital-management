const connection = require('../../model/dbconfig.js')

const getPres = (req,res) =>{
    let sql = "SELECT *FROM prescription";
    connection.query(sql,function(error,result){
        if(error){
            console.log('error...',error.sqlMessage)
        }
        else{
            res.send(result.rows);
        }
    })
}

const postPres = (req,res) => {
    let {patient_id, medication} = req.body;
    let sql = "INSERT INTO prescription (patient_id, medication) VALUES ($1, $2)"
    connection.query(sql,[patient_id,medication],function(error,result){
        if(error)
            console.log("Error...",error.sqlMessage)
        else
            res.send(result);
    })
}


const updatePres = (req,res)=>{
    let prescription_id = req.params.prescription_id;
    let  {medication} = req.body;
    const sql = "UPDATE prescription SET medication = $1 WHERE prescription_id = $2";
    connection.query(sql,[medication, prescription_id],(error,result)=>{
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}


const deletePres = (req,res) => {
    let data = req.params.id;
    let sql = "DELETE FROM prescription WHERE prescription_id=$1";
    connection.query(sql,[data],function(error,result){
        if(error)
        console.log("error...",error.sqlMessage)
        else
        res.send(result);
    })
}


module.exports = {getPres , postPres, updatePres, deletePres};