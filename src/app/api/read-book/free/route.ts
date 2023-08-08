// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { NextResponse } from "next/server";
import ReadBook from "@/backend/models/read.model";
import Book from "@/backend/models/book.model";
import User from "@/backend/models/user.model";
import { getCurrentSession } from "@/utils";
import { redirect } from "next/navigation";

const BASE_URL = process.env.BASE_URL;

export async function POST(req: Request) {
  await dbConnect();
  const { bookId } = await req.json();
  const { user } = await getCurrentSession();
  const currentDuration = Date.now();
  const lastDuration = user.duration;

  if (user.plan !== "free") {
    redirect("/read-book/starter");
  }
  try {
    const book = await Book.find({ _id: bookId }).select("note");
    if (!book) {
      return NextResponse.json({ message: "Book is not Available" });
    }
    let totalReadBook = await ReadBook.countDocuments({ user: user._id });
    if (currentDuration <= lastDuration && totalReadBook <= 5) {
      const readbook = await ReadBook.find({ user: user._id, book: bookId });
      if (!readbook) {
        const read = await ReadBook.create({
          user: user._id,
          book: bookId,
        });
        return NextResponse.json({ data: book });
      } else {
        return NextResponse.json({ data: book });
      }
    }
    if (currentDuration > lastDuration) {
      const readbook = await ReadBook.find({ user: user._id, book: bookId });
      if (!readbook) {
        const read = await ReadBook.create({
          user: user._id,
          book: bookId,
        });
        await User.updateOne({ _id: user._id }, { duration: currentDuration });
        return NextResponse.json({ data: book });
      } else {
        return NextResponse.json({ data: book });
      }
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
