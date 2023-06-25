import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from '@/backend/models/user.model'
import { Console } from "console"


const BASE_URL=process.env.BASE_URL
 
export const authOptions = {
     
    session: {
        strategy: "jwt",
        maxAge: 3600,
      },
      secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
     
      CredentialsProvider({

        name: 'credentials',
        credentials:{},
        async authorize(credentials, req){
              const {email, password } = credentials as {email:string,password:string}
              if (!email || !password){
                throw new Error("Incomplete  details");
              }
              const res = await fetch(`${BASE_URL}/api/auth/login`, {
                method: 'POST',
                body: JSON.stringify({email,password}),
                headers: { "Content-Type": "application/json" }
              })
              const {user} = await res.json()
             console.log({user})
              if(res.ok && user.is_active){
                return user
              }
              return null
        }
      })
      // ...add more providers here
    ],



    pages: {
      signIn: '/login',
      // signOut: '/auth/signout',
      // error: '/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/auth/verify-request', // (used for check email message)
      // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    debug:false
   
  }



  const handler =  NextAuth(authOptions)
  
  export  { handler as GET, handler as POST}