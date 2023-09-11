import { BASE_URL } from "@/config/env";
import dbConnect from "@/backend/database";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
headers;
export async function POST(req: Request) {
  await dbConnect();
  try {
    const { email, amount, code } = await req.json();
    const params = JSON.stringify({
      email: email,
      amount: amount * 100,
      plan: code,
      channels: ["card"],
      // callback: (response) => {
      //   redirect("/pricing");
      // },
      // limiting the checkout to show card, as it's the only channel that subscriptions are currently available through
      callback_url: `${BASE_URL}/pricing`,
    });
    const response = await fetch(
      `https://api.paystack.co/transaction/initialize`,
      {
        method: "POST",
        body: params,
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`, // where you place your secret key copied from your dashboard
          "Content-Type": "application/json",
          credentials: "include",
        },
      }
    );
    const { data } = await response.json();
    // console.log({ resData });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
