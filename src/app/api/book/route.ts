// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from 'next/server'
import Genre from '@/backend/models/genre.model'
import { cloudinaryConfig } from "@/config/cloudinary";



const BASE_URL=process.env.BASE_URL
cloudinaryConfig
export async function POST(req: Request) {
     await dbConnect()
     const {author,title,image,genre,edition} = await req.json()
     const data = {
        author,
        title,
        image,
        genre,
        edition
     }
     console.log({data})

     const result = await cloudinary.uploader.upload(image,{folder:"Book/cover"})

     console.log({result})
    //  const genre =  await Genre.create({name})
     return NextResponse.json({message:"Book is created"},{status:201})
  
}

export async function GET(req: Request) {
    await dbConnect()
    console.log("All book is here")
    return NextResponse.json({message:"All books is here"},{status:201})
 
}