// import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import dbConnect from "@/backend/database";
import Book from '@/backend/models/book.model'



const BASE_URL=process.env.BASE_URL

export async function POST(req: Request) {
     await dbConnect()
     const {author,name,note,image,genre,edition} = await req.json()
     const book =  await Book.create({
        
     })
     return NextResponse.json({message:"Book is created"},{status:201})
  
}

export async function GET(req: Request) {
    await dbConnect()
    console.log("All book is here")
    return NextResponse.json({message:"All books is here"},{status:201})
 
}