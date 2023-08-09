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
import { headers } from "next/headers";

const BASE_URL = process.env.BASE_URL;
export async function POST(req: Request) {
  await dbConnect();
  const { bookId } = await req.json();
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  const { user } = session;
  const reponse = await fetch(`${BASE_URL}/api/candownload`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({ user }),
  });
  const resData = await reponse.json();
  const { read } = resData;
  if (!read) {
    return NextResponse.json(
      {
        message:
          "Sorry You have exceed your total downloads for the week,Kindly upgrade your plan to get unlimited access",
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
    const readbook = await ReadBook.findOne({
      user: user._id,
      book: bookId,
    });
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
  } catch (error) {
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
