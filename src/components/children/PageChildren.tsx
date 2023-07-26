"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AppProvider from "@/context/AppProvider";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
};

const PageChildren = (props: Props) => {
  const { children } = props;
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/sign-up") {
    return (
      <AppProvider>
        <SessionProvider refetchInterval={5 * 60}>{children}</SessionProvider>
      </AppProvider>
    );
  }
  return (
    <AppProvider>
      <SessionProvider>
        <Header />
        {children}
      </SessionProvider>
      <Footer />
    </AppProvider>
  );
};

export default PageChildren;
