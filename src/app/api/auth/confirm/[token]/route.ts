import dbConnect from "@/backend/database";
import User from '@/backend/models/user.model'
const jwt = require('jsonwebtoken');


import { NextResponse } from 'next/server'

const BASE_URL=process.env.BASE_URL
 
export async function GET(   request: Request,{ params }: { params: { token: string } }) {
    await dbConnect()

    const token=params.token
   try{
     const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
     const user = await User.findOne({_id:decoded.id})
     if(!user){
        return NextResponse.json({error:"Invalid Link"})
     }
     await User.updateOne({ _id:user._id, is_active: true });
     return NextResponse.redirect(`${BASE_URL}/login`);
    //  return NextResponse.json({ message: "Email verified successfully"},{status:201})
   }
   catch(error){
    return NextResponse.json({error:error})
   }
}