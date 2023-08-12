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
  headers: any;
};

const PageChildren = (props: Props) => {
  const { children, session, headers } = props;
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/sign-up") {
    return (
      <AppProvider headers={headers}>
        <SessionProvider session={session} refetchInterval={5 * 60}>
          {children}
        </SessionProvider>
      </AppProvider>
    );
  }
  return (
    <AppProvider headers={headers}>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Header />
        <NextNProgress
          color="red"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        {children}
        <Footer />
      </SessionProvider>
    </AppProvider>
  );
};

export default PageChildren;
