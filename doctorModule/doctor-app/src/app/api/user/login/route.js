import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import pool from "../../../utils/dbconfig";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const sql = "SELECT * FROM login WHERE email = $1";

    const { rows } = await pool.query(sql, [email]);

    if (rows.length > 0) {
      const user = rows[0];

      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const token = jwt.sign({ email: user.email }, "jwt-secret-key", {
          expiresIn: "1d",
        });

        const response = NextResponse.json({ Status: "Success", token });
        response.cookies.set("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24,
        }); 

        return response;
      } else {
        return NextResponse.json(
          { Error: "Password not matched" },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json({ Error: "No userid existed" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ Err: "Login error in server" }, { status: 500 });
  }
}