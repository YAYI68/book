import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const image = formData.get("image");
  console.log({ name, email, image });
  return NextResponse.json({ name, email, image });
}
