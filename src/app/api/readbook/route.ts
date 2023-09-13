import dbConnect from "@/backend/database";
import { NextResponse } from "next/server";
import Book from "@/backend/models/book.model";
import { getCurrentSession } from "@/utils";
import LibraryBook from "@/backend/models/library.model";
import { canRead } from "./canRead";

export async function POST(req: Request) {
  await dbConnect();
  const { bookId } = await req.json();
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  const { user } = session;
  const read = await canRead(user);
  if (!read) {
    return NextResponse.json(
      {
        message:
          "Sorry You have exceed your total read for the week,Kindly upgrade your plan to get unlimited access",
      },
      { status: 401 }
    );
  }
  try {
    const book = await Book.findOne({ _id: bookId }).select("title note");
    if (!book) {
      return NextResponse.json(
        { message: " Sorry Book is not Available" },
        { status: 404 }
      );
    }
    const readbook = await LibraryBook.findOne({
      user: user._id,
      book: bookId,
      status: "read",
    });
    if (!readbook) {
      const read = await LibraryBook.create({
        user: user._id,
        book: bookId,
        status: "read",
      });
      return NextResponse.json({ data: book });
    } else {
      return NextResponse.json({ data: book });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  await dbConnect();
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  const { user } = session;

  try {
    const books = await LibraryBook.find({ user: user._id, status: "read" });
    return NextResponse.json({ data: books }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
