import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/backend/database";
import { getCurrentSession } from "@/utils";
import User from "@/backend/models/user.model";

export async function GET(req: NextRequest) {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  }
  const { user } = session;
  await dbConnect();
  const reference = req.nextUrl.searchParams.get("reference");

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`, // where you place your secret key copied from your dashboard
          "Content-Type": "application/json",
          credentials: "include",
        },
      }
    );

    const { data } = await response.json();
    if (data.status === "success") {
      console.log({ planData: data.plan_object });
      const planName = data.plan_object.name;
      const userData = await User.findOneAndUpdate(
        { email: user.email },
        {
          plan: planName,
          duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
        }
      );
      console.log({ userData });
      return NextResponse.json({ data, message: "success" }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          error: "An error occur in the transaction",
          message: "error",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occur in the transaction",
        message: "error",
      },
      { status: 500 }
    );
  }
}
