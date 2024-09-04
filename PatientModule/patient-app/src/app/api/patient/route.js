// app/api/patient/route.js
import pool from "../../utils/dbconfig";
import transporter from "../../utils/nodemailer";
import client from "../../utils/sms";
import { NextResponse } from "next/server";

// GET request to fetch patient data
export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM patient");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error executing query", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST request to add new patient data
export async function POST(req) {
  try {
    const {
      name,
      age,
      contact,
      emgc_contact,
      address,
      dob,
      gender,
      symptoms, // fixed typo from "symtoms"
      email,
    } = await req.json();

    // Insert patient data into the database
    const result = await pool.query(
      `INSERT INTO patient (name, age, contact, emgc_contact, address, dob, gender, symptoms, email)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [name, age, contact, emgc_contact, address, dob, gender, symptoms, email]
    );

    // Send email notification
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Appointment at Mayo Clinic",
      text: `Dear ${name},

We have received your appointment request at Mayo Clinic. Our team is currently reviewing your details, and you will receive a confirmation shortly.

If you have any questions or need further assistance, please do not hesitate to contact us.

Thank you for choosing Mayo Clinic.

Best regards,
Mayo Clinic Appointments Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("ERROR sending mail:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    // Send SMS notification
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: contact,
        body: `Dear ${name}, your appointment request at Mayo Clinic has been received. You will receive a confirmation shortly. Thank you for choosing Mayo Clinic.`,
      })
      .then((message) => console.log("SMS sent:", message.sid))
      .catch((error) => {
        console.error("Error sending SMS:", error);
      });

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Error inserting into patient:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
