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
};

const PageChildren = (props: Props) => {
  const { children } = props;
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/sign-up") {
    return <AppProvider>{children}</AppProvider>;
  }
  return (
    <AppProvider>
      <SessionProvider>
        <Header />
        <NextNProgress color="red" />
        {children}
        <Footer />
      </SessionProvider>
    </AppProvider>
  );
};

export default PageChildren;
