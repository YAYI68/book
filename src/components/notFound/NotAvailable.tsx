import React from "react";
import Nopage from "./Nopage";

type Props = {};

const NotAvailable = (props: Props) => {
  return (
    <div className="w-full h-full mt-6 flex flex-col items-center justify-center  ">
      <div className=" w-[80%] lg:w-[30%] h-[60%]bg-white flex flex-col items-center">
        <div className="w-full h-[80%]">
          <Nopage className="h-full w-full" />
        </div>
        <div className="w-[70%] text-dullBlack">
          <p>This page is unavailable at the moment. We’ll be right back.</p>
        </div>
      </div>
    </div>
  );
};

export default NotAvailable;
