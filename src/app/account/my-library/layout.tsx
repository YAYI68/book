"use client";
import TabNav from "@/components/header/TabNav";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const [tab, SetTab] = useState("all");
  const handleTabChange = (text: string) => {
    SetTab(text);
  };
  return (
    <div className="">
      <div className="" id="tab">
        <div className="">
          <h3 className="text-center text-[2rem] dark:text-white font-semibold ">
            My Library
          </h3>
        </div>
        <TabNav tab={tab} onChange={handleTabChange} />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
