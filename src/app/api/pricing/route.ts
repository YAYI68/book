// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { NextResponse } from "next/server";
import BookPlan from "@/backend/models/plan.model";

const BASE_URL = process.env.BASE_URL;

export async function POST(req: Request) {
  await dbConnect();
  const { name, amount, interval, features, code } = await req.json();
  try {
    const plan = await BookPlan.create({
      name,
      amount,
      interval,
      features,
      code,
    });
    return NextResponse.json(
      { message: "plan is created is created", plan },
      { status: 201 }
    );
  } catch (error) {
    console.log({ error });
  }
}

export async function GET(req: Request) {
  await dbConnect();
  const plan = await BookPlan.find({});
  return NextResponse.json({ data: plan }, { status: 200 });
}
