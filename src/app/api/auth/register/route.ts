// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import User from '@/backend/models/user.model'

import { NextResponse } from 'next/server'
import { createJwt, hashPassword,  messageTemplate,  transporter } from '@/backend/utils';


const BASE_URL=process.env.BASE_URL

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


export async function POST(req: Request) {
     await dbConnect()
     const {firstname,lastname,email,password,phoneNumber} = await req.json()
     if(!firstname.trim() || !lastname.trim() || !email.trim() || !password.trim()){
       return  NextResponse.json({error:"Incomplete Signup Credentials"},{status:500}) 
     }

     if(password.length < 8){
        return  NextResponse.json({error:"Password is too weak. Password must be atleast 8 characters "},{status:400}) 
     }
     
     if (!email.match(mailFormat)){
        return NextResponse.json({error:"Invalid Email Address"},{status:400})
     }
    
     const userExit = await User.findOne({email})

     if(userExit){
        return NextResponse.json({error:"User already exists!"},{status:409})
     }
     
     const hash = await hashPassword(password)
      try{

        const user = await User.create({
            firstname,
            lastname,
            email,
            password:hash,
            phoneNumber
        })

        const options = { expiresIn: '30d' }

        const token = createJwt(user,options)
        const confirm_email_url=`${BASE_URL}/api/auth/confirm/${token}`
        const htmlMessage =  messageTemplate(user.firstname,confirm_email_url)
        await transporter.sendMail({
            from:process.env.EMAIL_USER, // sender address
            to: "yayiabiodun68@gmail.com", // list of receivers
            subject: "Verify your email ", // Subject line
            // text: "Email Confirmation", // plain text body
            html: htmlMessage // html body
          });
        return NextResponse.json({message:"Please Check your email to confirm your account"},{status:201})
      }
      catch(err){
       return NextResponse.json({error:err},{status:500})

      }
  
}