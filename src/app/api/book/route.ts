// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { NextResponse } from "next/server";
import Book from "@/backend/models/book.model";
import { cloudinaryConfig } from "@/config/cloudinary";
import genreModel from "@/backend/models/genre.model";
import { getCurrentSession } from "@/utils";
import Genre from "@/backend/models/genre.model";
import { uploadToCloudinary } from "@/backend/utils";

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "20mb",
//     },
//   },
// };

cloudinaryConfig();
export async function POST(req: Request) {
  const session = await getCurrentSession();
  await dbConnect();
  const { author, title, description, image, genre, edition, note } =
    await req.json();
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  if (!author || !title || !image || !note) {
    return NextResponse.json({
      error: "Incomplete inFormation to register book ",
    });
  }
  try {
    const bookGenre = await Genre.findOne({ name: genre.toLowerCase() });
    const bookImage = await uploadToCloudinary({
      file: image,
      folder: "Book/covers",
    });
    const bookFile = await uploadToCloudinary({
      file: note,
      folder: "Book/files",
    });
    // console.log({ bookImage, bookFile });
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
    // console.log({ book });
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
