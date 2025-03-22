import db from "@/lib/db";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    // Check if user already exists
    const isExisting = await db.user.findUnique({
      where: { email },
    });

    if (isExisting) {
      return NextResponse.json(
        { message: "You've already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create user
    await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User has registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error); // Log error for debugging
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
