import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/backend/database";
import User from "@/backend/models/user.model";
import { GoogleProfile } from "next-auth/providers/google";
import { UserType } from "../../../../../types/next-auth";

const BASE_URL = process.env.BASE_URL;

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 3600, // 1 hour
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          return null;
        }
        const res = await fetch(`${BASE_URL}/api/auth/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });
        const { user } = await res.json();
        if (res.ok && user.is_active) {
          user.password = undefined;
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        const firstname = name.split(" ")[0];
        const lastname = name.split(" ")[1];
        try {
          const res = await fetch(`${BASE_URL}/api/auth/google`, {
            method: "POST",
            body: JSON.stringify({ firstname, lastname, email, image }),
            headers: { "Content-Type": "application/json" },
          });
          const { user: newUser } = await res.json();
          if (res.ok && newUser.is_active) {
            user = newUser;
            return true;
          }
        } catch (err) {
          return false;
        }
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        await dbConnect();
        const dbUser: UserType = await User.findOne({ email: user.email });
        token.role = dbUser.role;
        token.user = dbUser;
        return token;
      }
      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.role = token.role;
        session.user = token.user;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    // signOut: '/auth/signout',
    error: "/login", // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
