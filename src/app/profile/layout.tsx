import SideNavbar from "@/components/header/SideNavbar";
import { Main } from "@/components/ui";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <Main>
      <section className=" w-full  lg:pt-[3rem] pb-[2rem]">
        <div className="w-full h-full  flex flex-col items-center">
          <SideNavbar />
          <div className="w-[90%] flex flex-col items-end ">
            <aside className="w-full lg:w-[90%] rounded bg-gray-200 dark:bg-gray-800 p-4">
              {props.children}
            </aside>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default layout;
