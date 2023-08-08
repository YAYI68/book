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

  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  const { user } = session;
  const currentDuration = +new Date();
  const lastDuration = +new Date(`${user.duration}`);

  if (user.plan !== "free") {
    redirect("/read-book/starter");
  }
  try {
    const book = await Book.find({ _id: bookId }).select("note");
    if (!book) {
      return NextResponse.json(
        { message: "Book is not Available" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: book });
    // let totalReadBook = await ReadBook.countDocuments({ user: user._id });
    // if (currentDuration <= lastDuration && totalReadBook <= 5) {
    //   const readbook = await ReadBook.find({ user: user._id, book: bookId });
    //   if (!readbook) {
    //     const read = await ReadBook.create({
    //       user: user._id,
    //       book: bookId,
    //     });
    //     return NextResponse.json({ data: book });
    //   } else {
    //     return NextResponse.json({ data: book });
    //   }
    // }
    // if (currentDuration > lastDuration) {
    //   const readbook = await ReadBook.find({ user: user._id, book: bookId });
    //   if (!readbook) {
    //     const read = await ReadBook.create({
    //       user: user._id,
    //       book: bookId,
    //     });
    //     await User.updateOne(
    //       { _id: user._id },
    //       { duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) }
    //     );
    //     return NextResponse.json({ data: book });
    //   } else {
    //     return NextResponse.json({ data: book });
    //   }
    // } else {
    //   return NextResponse.json({
    //     message:
    //       "Sorry You have exceed your total read for the week,Kindly upgrade your plan to get unlimited access",
    //   });
    // }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(req: Request) {
  await dbConnect();
  const read = await ReadBook.find({});
  return NextResponse.json({ data: read }, { status: 200 });
}
