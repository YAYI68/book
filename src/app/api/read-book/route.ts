// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { NextResponse } from "next/server";
import ReadBook from "@/backend/models/read.model";
import { getCurrentSession } from "@/utils";

const BASE_URL = process.env.BASE_URL;

export async function POST(req: Request) {
  await dbConnect();
  const { userId, bookId } = await req.json();
  try {
    const { user } = await getCurrentSession();
    const readBook = await ReadBook.find({ user: userId });
    if (!readBook) {
    }

    let totalReadBook = await ReadBook.countDocuments({ user: userId });
    if (user.plan === "free" && totalReadBook < 5) {
      const read = await ReadBook.create({
        user: userId,
        book: bookId,
      });
      return NextResponse.json(
        { message: "Genre is created", data: read },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(req: Request) {
  await dbConnect();
  const read = await ReadBook.find({});
  return NextResponse.json({ data: read }, { status: 200 });
}
