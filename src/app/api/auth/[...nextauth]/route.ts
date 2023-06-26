import NextAuth, { CallbacksOptions, CookiesOptions, EventCallbacks, LoggerInstance, PagesOptions, SessionOptions, Theme } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { Provider } from "next-auth/providers"
import { JWTOptions } from "next-auth/jwt"
import { Adapter } from "next-auth/adapters"



const BASE_URL=process.env.BASE_URL

export interface AuthOptions {
  providers: Provider[];
  secret?: string;
  session?: Partial<SessionOptions>;
  jwt?: Partial<JWTOptions>;
  pages?: Partial<PagesOptions>;
  callbacks?: Partial<CallbacksOptions>;
  events?: Partial<EventCallbacks>;
  adapter?: Adapter;
  debug?: boolean;
  logger?: Partial<LoggerInstance>;
  theme?: Theme;
  useSecureCookies?: boolean;
  cookies?: Partial<CookiesOptions>;
}
 
export const authOptions:AuthOptions = {
     
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
              if(res.ok && user.is_active){
                user.password = undefined
                console.log("Login successfully ")
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