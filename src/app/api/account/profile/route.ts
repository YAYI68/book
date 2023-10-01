import { NextResponse } from "next/server";
import User from "@/backend/models/user.model";
import dbConnect from "@/backend/database";
import { getCurrentSession } from "@/utils";
import { uploadToCloudinary } from "@/backend/utils";
import { filteredInput } from "@/utils/utils";

export async function GET(request: Request) {
  const session = await getCurrentSession();
  const { user } = session;
  if (!session) {
    console.log("Unauthorized");
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  await dbConnect();
  try {
    const profile = await User.findOne({ _id: user._id });
    return NextResponse.json({ profile }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const { image, email, firstname, lastname } = await request.json();

  const session = await getCurrentSession();
  const { user } = session;
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }

  let profile_url;
  if (image) {
    profile_url = await uploadToCloudinary({
      file: image,
      folder: "userprofile",
    });
  }

  await dbConnect();
  try {
    const inputData = filteredInput({
      image: profile_url,
      email,
      firstname,
      lastname,
    });

    const profile = await User.findOneAndUpdate(
      { _id: user._id },
      {
        ...inputData,
      }
    );
    return NextResponse.json({ data: profile }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getCurrentSession();
  const { user } = session;
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  await dbConnect();
  try {
    const profile = await User.findOneAndDelete({ _id: user._id });
    return NextResponse.json(
      { success: "You profile is successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
