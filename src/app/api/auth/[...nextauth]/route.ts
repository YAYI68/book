import NextAuth, { AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";



const BASE_URL=process.env.BASE_URL

 
export const authOptions:AuthOptions = {
     
    session: {
        strategy: "jwt",
        maxAge: 3600, // 1 hour
      },
      secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [

      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
     
      CredentialsProvider({
        name: 'credentials',
        credentials:{},
        async authorize(credentials){
              const {email, password } = credentials as {email:string,password:string}
              if (!email || !password){
                throw new Error("Incomplete  Credentials");
              }
              const res = await fetch(`${BASE_URL}/api/auth/login`, {
                method: 'POST',
                body: JSON.stringify({email,password}),
                headers: { "Content-Type": "application/json" }
              })
              const {user} = await res.json()
              if(res.ok && user.is_active){
                user.password = undefined
                return user
              }
              return null
        }
      })
    ],
    callbacks: {
      async signIn({ }) {
        return true
      },
      async redirect({ url, baseUrl }) {
        // console.log({url,baseUrl})
        return baseUrl
      },
      async session({ session, user, token }) {
        token && (session.user = token.user);
        return session
      },
      async jwt({ token, user }) {
        user && (token.user = user);
        return token
      }
  },
    pages: {
      signIn: '/login',
      // signOut: '/auth/signout',
      // error: '/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/auth/verify-request', // (used for check email message)
      // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    debug:process.env.NODE_ENV === "development"
   
  }



  const handler =  NextAuth(authOptions)
  
  export  { handler as GET, handler as POST}