import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import cookie from "cookie";

export async function GET(req) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const token = cookies.token;

  if (!token) {
    return NextResponse.json({ error: "Token not found" }, { status: 400 });
  }

  try {
    const decodedToken = jwt.verify(token, "jwt-secret-key");
    console.log(decodedToken.email);
    const email = decodedToken.email;
    return NextResponse.json(email, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
