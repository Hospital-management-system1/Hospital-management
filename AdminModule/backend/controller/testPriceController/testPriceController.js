const connection = require('../../model/dbconfig.js');

const getPrice = (req,res) => {
    let sql = 'SELECT *FROM test_price';
    connection.query(sql,(error,result)=>{
        if(error)
            console.log("ERROR...",error.sqlMessage)
        else
            res.send(result.rows);
    })
}

const postPrice = (req,res) => {
    let {test_id, test_name, price, lab_id} = req.body;
    let sql = "INSERT INTO test_price (test_id, test_name, price, lab_id) VALUES ($1, $2, $3, $4)"
    connection.query(sql,[test_id, test_name, price, lab_id],function(error,result){
        if(error)
            console.log("Error...",error.sqlMessage)
        else
            res.send(result);
    })
}

const updatePrice = (req,res)=>{
    let test_id = req.params.test_id;
    let {test_name, price , lab_id} = req.body;
    let sql = "UPDATE test_price SET test_name = $1 , price = $2 WHERE test_id = $3";
    connection.query(sql,[test_name, price , test_id],function(error,result){
        if(error)
            console.log("ERROR",error.sqlMessage);
        else
            res.send(result);
    })
}

const deletePrice = (req,res) =>{
    let data = req.params.id;
    let sql = "DELETE FROM test_price WHERE test_id = $1";
    connection.query(sql,[data],(error,result)=>{
        if(error)
            console.log("error...",error.sqlMessage)
        else
            res.send(result)
    })
}





module.exports = { getPrice, postPrice, updatePrice, deletePrice };