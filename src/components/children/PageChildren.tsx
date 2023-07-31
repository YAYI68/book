"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AppProvider from "@/context/AppProvider";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

type Props = {
  children: ReactNode;
  session: any;
};

const PageChildren = (props: Props) => {
  const { children, session } = props;
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/sign-up") {
    return (
      <AppProvider>
        <SessionProvider session={session} refetchInterval={5 * 60}>
          {children}
        </SessionProvider>
      </AppProvider>
    );
  }
  return (
    <AppProvider>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Header />
        <NextNProgress color="red" />
        {children}
        <Footer />
      </SessionProvider>
    </AppProvider>
  );
};

export default PageChildren;
