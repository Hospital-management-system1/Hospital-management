const connection = require("../../model/dbconfig.js");
const transporter = require("../../model/nodemailer.js");

const getAppointment = (req, res) => {
  let sql = "SELECT *FROM appointment";
  connection.query(sql, (error, result) => {
    if (error) console.log("ERROR...", error.sqlMessage);
    else res.send(result.rows);
  });
};

const postAppointment = (req, res) => {
  let { patient_id, emp_id, time, date } = req.body;
  let sql =
    "INSERT INTO appointment (patient_id, emp_id, time, date) VALUES ($1, $2, $3, $4)";

  connection.query(
    sql,
    [patient_id, emp_id, time, date],
    function (error, result) {
      if (error) {
        console.log("Error...", error);
        res.status(500).send("Error occurred while inserting appointment.");
      } else {
        let sql2 = "SELECT *FROM patient WHERE patient_id = $1";

        connection.query(sql2, [patient_id], function (error, patientResult) {
          if (error) {
            console.log("Error fetching patient details...", error);
            res
              .status(500)
              .send("Error occurred while fetching patient details.");
          } else {
            // mail to patient
            const mailOptions1 = {
              from: "mohitgour0009@gmail.com",
              to: patientResult.rows[0].email,
              subject: "Appointment Confirmation - Mayo Clinic",
              text: `Dear ${patientResult.rows[0].name},
            
            We are pleased to confirm your appointment at Mayo Clinic on ${date} at ${time}. 
            
            If you have any questions or need to reschedule, please do not hesitate to contact us.
            
            Thank you for choosing Mayo Clinic.
            
            Best regards,
            Team
            Mayo Clinic`,
            };
            

            transporter.sendMail(mailOptions1, (error, info) => {
              if (error) {
                console.log("Error sending mail to patient", error);
              } else {
                console.log("Email sent:", info.response);
              }
            });

            let sql3 = "SELECT * FROM emp_register WHERE emp_id = $1";

            connection.query(sql3, [emp_id], function (error, employeeResult) {
              if (error) {
                console.log("Error fetching employee email...", error);
                res
                  .status(500)
                  .send("Error occurred while fetching employee email.");
              } else {
                const patient = patientResult.rows[0];
                const employeeEmail = employeeResult.rows[0].email;
                const emp_name = employeeResult.rows[0].emp_name;

                const mailOptions2 = {
                  from: 'mohitgour0009@gmail.com',
                  to: employeeEmail,
                  subject: 'Upcoming Appointment Scheduled - Mayo Clinic',
                  text: `Dear Dr. ${emp_name},
                
                We would like to inform you that an appointment has been scheduled for you at Mayo Clinic on ${date} at ${time}.
                
                Please review your schedule accordingly.
                
                Best regards,
                Team
                Mayo Clinic`,
                };
                
                
                transporter.sendMail(mailOptions2, (error, info)=> {
                  if(error){
                    console.log("Error sending mail to doctor", error);
                  }else {
                    console.log("Email sent:", info.response);
                  }
                })

                console.log("Patient Contact:", patient.contact);
                console.log("Patient Email:", patient.email);
                console.log("Employee Email:", employeeEmail);

                // Send the appointment result along with patient and employee email
                res.send({
                  appointment: result,
                  patient: {
                    contact: patient.contact,
                    emgc_contact: patient.emgc_contact,
                    email: patient.email,
                  },
                  employee: {
                    email: employeeEmail,
                  },
                });
              }
            });
          }
        });
      }
    }
  );
};

// post appointment by me

// const postAppointment = (req, res) => {
//   let { patient_id, emp_id, time, date } = req.body;
//   let sql =
//     "INSERT INTO appointment ( patient_id, emp_id, time, date) VALUES ($1, $2, $3, $4)";

//   connection.query(
//     sql,
//     [patient_id, emp_id, time, date],
//     function (error, result) {
//       if (error) {
//         console.log("Error...", error);
//         res.status(500).send("Error occurred while inserting appointment.");
//       } else {
//         let sql2 = `SELECT contact, email FROM patient WHERE patient_id = $1`;
//         connection.query(sql2, [patient_id], (error, patientResult) => {
//           if (error) {
//             console.log("Error in getting patient data", error);
//             res.status(500).send("Error in fetching patient details");
//           } else {
//             const { contact, email } = patientResult.rows[0];
//             console.log("Contact : ", contact);
//             console.log("Email : ", email);

//           res.send({
//             appointment: result,
//             patient : {contact, email}
//           });
//         }
//         });
//       }
//     }
//   );
// };

// const updateAssign = (req, res) => {
//   let assign_id = req.params.assign_id;
//   let { role_id, emp_id } = req.body;
//   let sql =
//     "UPDATE role_assign SET role_id = $1 , emp_id = $2 WHERE assign_id = $3";
//   connection.query(sql, [role_id, emp_id, assign_id], function (error, result) {
//     if (error) console.log("ERROR", error.sqlMessage);
//     else res.send(result);
//   });
// };

// const deleteAssign = (req, res) => {
//   let data = req.params.id;
//   let sql = "DELETE FROM role_assign WHERE assign_id = $1";
//   connection.query(sql, [data], (error, result) => {
//     if (error) console.log("error...", error.sqlMessage);
//     else res.send(result);
//   });
// };

// const getSingleRoleAssign = (req, res) => {
//   let emp_id = req.params.emp_id;
//   let query = "SELECT emp_id, role_id FROM role_assign WHERE emp_id=$1";
//   connection.query(query, [emp_id], (err, result) => {
//     if (err) {
//       res.send(err);
//       console.log(err);
//     } else {
//       res.send(result.rows);
//       console.log(result.rows);
//     }
//   });
// };

// const deleteRoleAssign = (req, res) => {
//   let { role_id, emp_id } = req.params;
//   let query = "DELETE FROM role_assign WHERE role_id = $1 AND emp_id = $2";
//   connection.query(query, [role_id, emp_id], (err, result) => {
//     if (err) {
//       res.send(err);
//       console.log(err.sqlMessage);
//     } else {
//       res.send(result);
//       console.log(result);
//     }
//   });
// };

module.exports = {
  getAppointment,
  postAppointment,
  //   updateAssign,
  //   deleteAssign,
  //   getSingleRoleAssign,
  //   deleteRoleAssign,
};
