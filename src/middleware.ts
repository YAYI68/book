import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware(request) {
    let pathname = request.nextUrl.pathname;
    const token = request.nextauth.token;
    console.log({ pathname });

    if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/profile", request.url));
    }

    if (pathname.startsWith("/api/auth") && token) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/dashboard", "/api/auth/:path*", "/profile", "/my-library"],
};
