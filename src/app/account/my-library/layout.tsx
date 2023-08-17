import TabNav from "@/components/header/TabNav";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
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

export default layout;
