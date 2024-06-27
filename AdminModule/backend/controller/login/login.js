const connection = require("../../model/dbconfig.js");
const bcrypt = require('bcrypt');
const salt = 10;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const getAdmin = (req, res) => {
  let sql = `SELECT * FROM login ORDER BY name`;
  connection.query(sql, function (error, result) {
    if (error) console.log("Error in getting data", error.sqlMessage);
    else res.send(result.rows);
  });
};

//  Register function
const postAdmin = (req, res) => {
  let sql = "INSERT INTO login (name, email, password) VALUES ($1, $2, $3)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing password" });

    const values = [req.body.name, req.body.email, hash];

    connection.query(sql, values, (err, result) => {
      if (err)
        return res.json({
          Error: "Inserting data error in server",
          details: err.message,
        });
      return res.json({ Status: "Success" });
    });
  });
};

// login function 

const loginAdmin = (req, res) => {
  const sql = 'SELECT * FROM login WHERE email = $1';
  connection.query(sql, [req.body.email], (err, result) => {
    if (err) {
      console.error('Database query error', err);
      return res.json({ Error: "Login error in server" });
    }
    // console.log(req.body);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      bcrypt.compare(req.body.password.toString(), user.password, (err, response) => {
        if (err) {
          console.error('Password comparison error', err);
          return res.json({ Error: "Password compare error" });
        }

        if (response) {

          return res.json({ Status: "Success" });
        } else {
          return res.json({ Error: "Password not matched" });
        }
      });
    } else {
      return res.json({ Error: "No email existed" });
    }
  });
};


module.exports = { getAdmin, postAdmin, loginAdmin };
