import dbConnect from "@/backend/database";
import User from '@/backend/models/user.model'

import { NextResponse } from 'next/server'
 
export async function GET() {

    await dbConnect()
   const user =  await User.create({
    firstName:'kunle',
    lastName:'Olowo'
    })


 
  return NextResponse.json({ user })
}