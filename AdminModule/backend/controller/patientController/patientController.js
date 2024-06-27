//update api having issue & post api last att. is going null from postman

const connection = require('../../model/dbconfig.js');

const getPatient = (req,res) => {
    let sql = 'SELECT *FROM patient ORDER BY patient_id';
    connection.query(sql,(error,result)=>{
        if(error)
            console.log("ERROR...",error.sqlMessage)
        else
            res.send(result.rows);
    })
}

const postPatient = (req,res) => {
    let {name, age , contact , emgc_contact, address, dob, gender, symtoms} = req.body;
    let sql = "INSERT INTO patient (name, age , contact , emgc_contact, address, dob, gender, symtoms) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
    connection.query(sql,[name, age , contact , emgc_contact, address, dob, gender, symtoms],function(error,result){
        if(error)
            console.log("Error...",error.sqlMessage)
        else
            res.send(result);
    })
}

const updatePatient = (req,res)=>{
    let patient_id = req.params.patient_id;
    let {emgc_contact, address}  = req.body;
    let sql = 'UPDATE patient SET emgc_contact = $1, address = $2 WHERE patient_id = $3'
    connection.query(sql,[emgc_contact, address, patient_id],function(error,result){
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}

const deletePatient = (req,res) =>{
    let data = req.params.id;
    let sql = "DELETE FROM patient WHERE patient_id = $1";
    connection.query(sql,[data],(error,result)=>{
        if(error)
            console.log("error...",error.sqlMessage)
        else
            res.send(result)
    })
}





module.exports = { getPatient, postPatient, updatePatient, deletePatient };