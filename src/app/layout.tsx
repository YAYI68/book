import "./globals.css";
import { Roboto } from "next/font/google";
import PageChildren from "@/components/children/PageChildren";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { headers } from "next/headers";

// import { SessionProvider } from "next-auth/react";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Studee",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const reqHeaders = headers();
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <PageChildren headers={reqHeaders} session={session}>
          {children}
        </PageChildren>
      </body>
    </html>
  );
}
