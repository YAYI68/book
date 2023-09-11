import dbConnect from "@/backend/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();
  const reference = req.nextUrl.searchParams.get("reference");
  // const response = await fetch(
  //   `https://api.paystack.co/transaction/verify/${reference}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${process.env.SECRET_KEY}`, // where you place your secret key copied from your dashboard
  //       "Content-Type": "application/json",
  //       credentials: "include",
  //     },
  //   }
  // );
  // const { data } = await response.json();
  console.log({ reference });

  try {
    return NextResponse.json({ message: "hello" }, { status: 200 });
  } catch (error) {
    console.log({ error });
  }
}
