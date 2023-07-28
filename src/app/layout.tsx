import "./globals.css";
import { Roboto } from "next/font/google";
import PageChildren from "@/components/children/PageChildren";
import NextNProgress from "nextjs-progressbar";
// import { SessionProvider } from "next-auth/react";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Studee",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <PageChildren>{children}</PageChildren>
      </body>
    </html>
  );
}
