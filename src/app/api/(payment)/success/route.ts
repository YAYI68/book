import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/backend/database";
import { getCurrentSession } from "@/utils";
import User from "@/backend/models/user.model";

export async function GET(req: NextRequest) {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ message: "UnAuthorized" }, { status: 401 });
  } else {
    const { user } = session;
    await dbConnect();
    const ref = req.nextUrl.searchParams.get("reference");

    try {
      const response = await fetch(
        `https://api.paystack.co/transaction/verify/${ref}`,
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
        const planName = data.plan_object.name;
        const userData = await User.findOneAndUpdate(
          { email: user.email },
          {
            plan: planName,
            duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
          }
        );
        const result = {
          status: data.status,
          method: data.channel,
          plan: data.plan_object.name,
          customer: `${data.customer.first_name} ${data.customer.last_name}`,
          email: data.customer.email,
          paidAt: data.paidAt,
          amount: data.amount / 100,
          reference: data.reference,
          currency: data.currency,
        };
        return NextResponse.json({ ...result }, { status: 200 });
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
}
