import React, { ReactNode } from "react";
import TabNav from "@/components/header/TabNav";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="">
      <div className="" id="tab">
        <div className="">
          <h3 className="text-center text-[2rem] dark:text-white font-semibold ">
            My Library
          </h3>
        </div>
        <TabNav />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
