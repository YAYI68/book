// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import Book from "@/backend/models/book.model";
import Genre from "@/backend/models/genre.model";
import { cloudinaryConfig } from "@/config/cloudinary";
import { getCurrentSession } from "@/utils";
import genreModel from "@/backend/models/genre.model";

cloudinaryConfig;
export async function POST(req: Request) {
  await dbConnect();
  console.log("Book is here");
  const session = await getCurrentSession();
  if (!session) {
    console.log("Unauthorized");
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  const { author, title, description, image, genre, edition, note } =
    await req.json();

  console.log({ author, title, description, genre, edition, image, note });

  if (!author || !title || !image || !note) {
    return NextResponse.json({
      error: "Incomplete inFormation to register book ",
    });
  }
  try {
    const bookGenre = await Genre.findOne({ name: genre.toLowerCase() });
    const bookImage = await cloudinary.uploader.upload(image, {
      folder: "Book/covers",
    });
    const bookFile = await cloudinary.uploader.upload(note, {
      folder: "Book/files",
    });
    const book = await Book.create({
      author,
      title,
      image: bookImage.secure_url,
      note: bookFile.secure_url,
      pages: bookFile.pages,
      format: bookFile.format,
      edition,
      description,
      genre: bookGenre ? bookGenre._id : "",
    });
    return NextResponse.json({ book }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: Request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "";
  const catalog = searchParams.get("catalog") || "";
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 5;
  const skip = (page - 1) * limit;
  let genre;

  try {
    if (category) {
      genre = await genreModel.findOne({ name: category.toLowerCase() });
    }

    if (catalog === "trends") {
      const trendBoooks = await Book.find(genre ? { genre: genre } : {})
        .populate("genre", "name")
        .sort({ updatedAt: -1, readCount: -1 })
        .skip(skip)
        .limit(limit);
      console.log({ trend: trendBoooks });
      const totalTrendBooks = await Book.countDocuments(
        genre ? { genre: genre } : {}
      );
      const totalPages = Math.ceil(totalTrendBooks / limit);
      console.log("trends is returned");
      return NextResponse.json(
        { data: trendBoooks, page, limit, totalPages },
        { status: 200 }
      );
    }
    if (catalog === "top_picked") {
      const topPickedBooks = await Book.find(genre ? { genre: genre } : {})
        .populate("genre", "name")
        .sort({ updatedAt: -1, downloadCount: -1 })
        .skip(skip)
        .limit(limit);
      const totalPickedBooks = await Book.countDocuments(
        genre ? { genre: genre } : {}
      );
      const totalPages = Math.ceil(totalPickedBooks / limit);
      console.log("Picked is returned");
      return NextResponse.json(
        { data: topPickedBooks, page, limit, totalPages },
        { status: 200 }
      );
    }
    if (catalog === "classic") {
      const topPickedBooks = await Book.find(
        genre ? { genre: genre, catalog: "classic" } : { catalog: "classic" }
      )
        .populate("genre", "name")
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limit);
      const totalPickedBooks = await Book.countDocuments(
        genre ? { genre: genre } : {}
      );
      const totalPages = Math.ceil(totalPickedBooks / limit);
      return NextResponse.json(
        { data: topPickedBooks, page, limit, totalPages },
        { status: 200 }
      );
    }
    const books = await Book.find(genre ? { genre: genre } : {})
      .populate("genre", "name")
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit);
    const totalBooks = await Book.countDocuments(genre ? { genre: genre } : {});
    const totalPages = Math.ceil(totalBooks / limit);
    return NextResponse.json(
      { data: books, page, limit, totalPages },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
