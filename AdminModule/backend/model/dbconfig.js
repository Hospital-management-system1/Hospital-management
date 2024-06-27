const pg = require('pg');
const connection = new pg.Client({
    user:'postgres',
    password:'mohit@0009',
    host:'localhost',
    port:5432,
    database:'hospital'
})

connection.connect(function(err){
    if(err)
        console.log("error..",err.sqlMessage)
    else
    console.log('connection Done. . .');
})

module.exports = connection;