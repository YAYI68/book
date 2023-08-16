// import NextAuth from "next-auth"
import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export type UserType = {
  _id: string;
  firstname: string;
  lastname: string;
  image: string;
  email: string;
  plan: string;
  is_active: boolean;
  duration: Date;
  readLimit: number;
  downloadLimit: number;
  readCount: number;
  downloadCount: number;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserType | DefaultSession;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    user: UserType;
  }
}
