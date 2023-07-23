import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      className={` p-2 w-full bg-orange-700 flex flex-col items-center justify-center h-[20rem]`}
    >
      <p className="text-white font-semibold text-[2rem]">
        Upgrade your plan and get access to over 1000 books
      </p>
    </div>
  );
};

export default Banner;
