import React from "react";
import { Spinner } from "../ui";

type Props = {};

const Loader = (props: Props) => {
  return (
    <main className="w-screen h-screen backdrop-blur-[4px] flex items-center justify-center">
      <div>
        <Spinner className="w-[3rem] h-[3rem]" />
      </div>
    </main>
  );
};

export default Loader;