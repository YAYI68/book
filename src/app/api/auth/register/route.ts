// import { NextRequest } from 'next/server'
import dbConnect from "@/backend/database";
import User from '@/backend/models/user.model'

import { NextResponse } from 'next/server'
import { hashPassword } from '@/backend/utils';

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export async function POST(req: Request) {
     await dbConnect()
     const {name,email,password,phoneNumber} = await req.json()
     if(!name.trim() || !email.trim() || !password.trim()){
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
            name,
            email,
            password:hash,
            phoneNumber
        })
      }
      catch(err){
        
      }
    //  const user = await User.create({
    //    name,
    //    email,
    //    password:hash
    //  })


//    const user =  await User.create({
//     firstName:'kunle',
//     lastName:'Olowo'
//     })


 
  return NextResponse.json({ message:'Hello from register'})
}