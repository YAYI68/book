// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { NextResponse } from "next/server";
import Genre from "@/backend/models/genre.model";

const BASE_URL = process.env.BASE_URL;

export async function POST(req: Request) {
  await dbConnect();
  const { name } = await req.json();
  if (!name) {
    return NextResponse.json({ message: "Invalid input" }, { status: 401 });
  }
  let genreName = name.toLowerCase();
  const genre = await Genre.create({ name: genreName });
  return NextResponse.json(
    { message: "Genre is created", data: genre },
    { status: 201 }
  );
}

export async function GET(req: Request) {
  await dbConnect();
  const genre = await Genre.find();
  return NextResponse.json({ data: genre }, { status: 200 });
}
