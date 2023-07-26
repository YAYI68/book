// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import User from "@/backend/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await dbConnect();
  const { firstname, lastname, email, image } = await req.json();

  const userExit = await User.findOne({ email });
  if (!userExit) {
    try {
      const user = await User.create({
        firstname,
        lastname,
        email,
        image,
        is_active: true,
      });
      return NextResponse.json(
        { message: "Your signup is sucessfull", user },
        { status: 201 }
      );
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 500 });
    }
  }
  return NextResponse.json({ user: userExit }, { status: 200 });
}
