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
import ReadBook from "@/backend/models/library.model";

export async function POST(req: Request) {
  await dbConnect();
  const { user } = await req.json();
  try {
    const currentDuration = +new Date();
    const lastDuration = +new Date(`${user.duration}`);
    if (currentDuration < lastDuration && user.readCount < user.readLimit) {
      console.log("condition One ");
      await User.updateOne(
        { _id: user._id },
        {
          readCount: user.readCount++,
        }
      );
      return NextResponse.json({ read: true });
    }
    if (currentDuration > lastDuration && user.readCount < user.readLimit) {
      console.log("condition Two ");
      await User.updateOne(
        { _id: user._id },
        {
          readCount: user.readCount++,
          duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
        }
      );
      return NextResponse.json({ read: true });
    }
    if (currentDuration > lastDuration && user.readCount === user.readLimit) {
      console.log("condition Three ");
      await User.updateOne(
        { _id: user._id },
        {
          readCount: user.readCount++,
          duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
          readLimit:
            user.plan === "free"
              ? user.readLimit + 5
              : user.plan === "starter"
              ? user.readLimit + 10
              : Number.POSITIVE_INFINITY,
        }
      );
      return NextResponse.json({ read: true });
    }
    //   reach limit for the week
    if (currentDuration < lastDuration && user.readCount === user.readLimit) {
      console.log("condition Four ");
      return NextResponse.json({ read: false });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
