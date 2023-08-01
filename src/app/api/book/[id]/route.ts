import dbConnect from "@/backend/database";

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import Book from "@/backend/models/book.model";
import Genre from "@/backend/models/genre.model";
import { cloudinaryConfig } from "@/config/cloudinary";
import { getCurrentSession } from "@/utils";

const getPublicId = (url: string) => {
  const public_id = url.split("/").slice(-3).join("/").split(".")[0];
  return public_id;
};

const CLOUDINARY_URL = "https://res.cloudinary.com/";

cloudinaryConfig;

export async function GET(req: Request, { params }) {
  await dbConnect();
  try {
    const book = await Book.findOne({ _id: params.id }).populate(
      "genre",
      "name"
    );
    if (!book) {
      return NextResponse.json({ message: "book not found " }, { status: 401 });
    }
    return NextResponse.json({ data: book }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }) {
  await dbConnect();
  const { author, title, description, image, genre, edition, note } =
    await req.json();
  const session = await getCurrentSession();
  if (session.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }
  try {
    const bookGenre = await Genre.findOne({ name: genre });
    if (!image.startsWith(CLOUDINARY_URL) || !note.startsWith(CLOUDINARY_URL)) {
      const book = await Book.findOne({ _id: params.id });
      console.log({ book });
      const image_public_id = getPublicId(book.image);
      const note_public_id = getPublicId(book.note);
      const deletedImage = await cloudinary.uploader.destroy(image_public_id);
      const deletedNote = await cloudinary.uploader.destroy(note_public_id);
      const bookImage = await cloudinary.uploader.upload(image, {
        folder: "Book/covers",
      });
      const bookFile = await cloudinary.uploader.upload(note, {
        folder: "Book/files",
      });
      book.author = author;
      book.title = title;
      book.description = description;
      book.genre = bookGenre;
      book.image = bookImage.secure_url;
      book.note = bookFile.secure_url;
      book.pages = bookFile.pages;
      book.format = bookFile.format;
      await book.save();
      return NextResponse.json({ data: book }, { status: 200 });
    } else {
      const book = await Book.findByIdAndUpdate(
        { _id: params.id },
        {
          author,
          title,
          description,
          genre: bookGenre,
          edition,
        }
      );
      return NextResponse.json({ data: book }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }) {
  await dbConnect();
  const session = await getCurrentSession();
  if (session.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }
  try {
    const book = await Book.findOneAndDelete({ _id: params.id });
    if (!book) {
      return NextResponse.json({ message: "book not found " }, { status: 401 });
    }
    const image_public_id = getPublicId(book.image);
    const note_public_id = getPublicId(book.note);
    const deletedImage = await cloudinary.uploader.destroy(image_public_id);
    const deletedNote = await cloudinary.uploader.destroy(note_public_id);
    return NextResponse.json(
      { message: "Book deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
