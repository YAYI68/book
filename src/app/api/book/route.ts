// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from 'next/server'
import Book from '@/backend/models/book.model'
import Genre from '@/backend/models/genre.model'
import { cloudinaryConfig } from "@/config/cloudinary";



const BASE_URL=process.env.BASE_URL
cloudinaryConfig
export async function POST(req: Request) {
     await dbConnect()
     const {author,title,description,image,genre,edition,note} = await req.json() 

     if(!author || !title || !image || !note ){
        return NextResponse.json({error:"Incomplete inFormation to register book "})
     }
     try{
        const bookGenre = await Genre.findOne({name:genre})
        const bookImage = await cloudinary.uploader.upload(image,{folder:"Book/covers"})
        const bookFile = await cloudinary.uploader.upload(note,{folder:"Book/files"})
        const book = await Book.create({
            author,
            title,
            image:bookImage.secure_url,
            note:bookFile.secure_url,
            pages:bookFile.pages,
            format:bookFile.format,
            edition,
            description,
            genre:bookGenre,
        })
        return NextResponse.json({book},{status:201})
     }
     catch(error){
        return NextResponse.json({error},{status:500})
     }

}

export async function GET(req: Request) {
    await dbConnect()
    try{
       const books = await Book.find({})
       return NextResponse.json({books},{status:200})
    }
    catch(error){
      return NextResponse.json({error},{status:500})
    }
}