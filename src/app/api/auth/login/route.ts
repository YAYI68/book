// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import User from "@/backend/models/user.model";

import { NextResponse } from "next/server";
import { comparePassword } from "@/backend/utils";

const BASE_URL = process.env.BASE_URL;

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { error: "Incomplete Credentials" },
      { status: 401 }
    );
  }

  if (password.length < 5) {
    return NextResponse.json(
      { error: "Password is too weak. Password must be atleast 8 characters " },
      { status: 400 }
    );
  }

  if (!email.match(mailFormat)) {
    return NextResponse.json(
      { error: "Invalid Email Address" },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ email: email }).select("+password");

    const isValid = await comparePassword(password, user.password);

    const currentDuration = +new Date();
    const weekDuration = +new Date(`${user.duration}`);

    if (currentDuration > weekDuration) {
      await User.findOneAndUpdate(
        { _id: user._id },
        { duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) }
      );
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    if (user && isValid) {
      return NextResponse.json({ user }, { status: 201 });
    }
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
