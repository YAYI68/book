import { NextResponse } from "next/server";
import Book from "@/backend/models/book.model";
import dbConnect from "@/backend/database";
import { getCurrentSession } from "@/utils";

export async function GET(request: Request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;
  const skip = (page - 1) * limit;
  try {
    const books = await Book.find({})
      .sort("downloadCount")
      .skip(skip)
      .limit(limit);
    const totalBooks = await Book.countDocuments();
    const totalPages = Math.ceil(totalBooks / limit);
    return NextResponse.json(
      { page, limit, totalPages, books },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
