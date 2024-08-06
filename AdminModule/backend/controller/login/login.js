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
    // console.log(result);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      bcrypt.compare(req.body.password.toString(), user.password, (err, response) => {
        if (err) {
          console.error('Password comparison error', err);
          return res.json({ Error: "Password compare error" });
        }
        if (response) {
         
          const storeData= {
            email:result.rows[0].email,
            name:result.rows[0].name
          }
          
          const token = jwt.sign(storeData,"jwt-secret-key-is-here",{expiresIn:'1h'
          })
          const option = {
            expires: new Date(Date.now() + 1 * 1 * 60 * 60 * 1000),
            secure:true,
            httpOnly:true,
            sameSite:"none",
            path:'/'
          };
          res.cookie('admintoken',token,option);
          res.status(200).json("token generate")
        } else {
          return res.json({ Error: "Password not matched" });
        }
      });
    } else {
      return res.json({ Error: "No email existed" });
    }
  });
};

const tokenVeification = (req, res, next) => {
  const token = req.cookies.admintoken;
  if(!token){
    res.status(400).json("token not found")
  } else{
    try {
      const decodeToken = jwt.verify(token, "jwt-secret-key-is-here" );
      req.name = decodeToken.name;
      req.email = decodeToken.email;
      next()
    } catch (error) {
      console.log("server error", error)
    }
  }
}

const finalVerification = (req, res) => {
  return(
    res.json({
      name:req.name,
      email:req.email,
      message:'Success'
    })
  )
}

const logoutAdmin = async (req , res) => {
  try{
    res.clearCookie('admintoken');
    return res.json({Status: "Success"});
  }catch(error){
    console.log("error logout");
  }
}


module.exports = { getAdmin, postAdmin, loginAdmin, tokenVeification, finalVerification,logoutAdmin };
