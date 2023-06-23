import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from '@/backend/models/user.model'
import { Console } from "console"

 
export const authOptions = {
     
    session: {
        strategy: "jwt",
        maxAge: 3600,
      },
    secret:process.env.COOKIE_SECRET,
    // Configure one or more authentication providers
    providers: [
     
      CredentialsProvider({
        name:'credentials',
        async authorize(credentials, req){
            const {email,password} = credentials as {email:string,password:string}
            console.log({email,password})

            if(email !== "yayi@gmail.com" && password !=="12345"){
                throw new Error("Invalid Credentials") 
            }
            return {email,password}
        }
      })
      // ...add more providers here
    ],
   
  }



  const handler =  NextAuth(authOptions)
  
  export  { handler as GET, handler as POST}