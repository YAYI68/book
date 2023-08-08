import dbConnect from "@/backend/database";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import Book from "@/backend/models/book.model";
import Genre from "@/backend/models/genre.model";
import User from "@/backend/models/user.model";
import { cloudinaryConfig } from "@/config/cloudinary";
import { getCurrentSession } from "@/utils";
import genreModel from "@/backend/models/genre.model";
import { redirect } from "next/navigation";
import ReadBook from "@/backend/models/read.model";

export async function POST(req: Request) {
  await dbConnect();
  const { bookId } = await req.json();

  console.log({ bookId });

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
    const book = await Book.findOne({ _id: bookId }).select("title note");
    if (!book) {
      return NextResponse.json(
        { message: "Book is not Available" },
        { status: 404 }
      );
    }

    let totalReadBook = await ReadBook.countDocuments({ user: user._id });

    if (currentDuration <= lastDuration && totalReadBook <= 5) {
      const readbook = await ReadBook.findOne({ user: user._id, book: bookId });
      console.log({ readbook });
      if (!readbook) {
        const read = await ReadBook.create({
          user: user._id,
          book: bookId,
        });
        return NextResponse.json({ data: book });
      } else {
        console.log("This condition is working now");
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
        await User.updateOne(
          { _id: user._id },
          { duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000) }
        );
        return NextResponse.json({ data: book });
      } else {
        return NextResponse.json({ data: book });
      }
    } else {
      return NextResponse.json({
        message:
          "Sorry You have exceed your total read for the week,Kindly upgrade your plan to get unlimited access",
      });
    }
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  await dbConnect();
  try {
    const books = await ReadBook.find({});
    console.log({ read: books });
    return NextResponse.json({ data: books }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
