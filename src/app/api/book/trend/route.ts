import { NextResponse } from "next/server";
import Book from "@/backend/models/book.model";
import dbConnect from "@/backend/database";
import { getCurrentSession } from "@/utils";

export async function GET(request: Request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;
  const sortBy = searchParams.get("sortBy");
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const skip = (page - 1) * limit;
  console.log({ id, name });
  const session = await getCurrentSession();
  if (session?.role !== "User") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 500 });
  }
  try {
    const books = await Book.find({}).sort(sortBy).skip(skip).limit(limit);
    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
