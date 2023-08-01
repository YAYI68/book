import Link from "next/link";
import React from "react";

type Props = {};

const Book = (props: Props) => {
  return (
    <Link
      href={"/books/detail"}
      className="h-[23rem] w-full md:w-[43%] lg:w-[18%]"
    >
      <div className="w-full h-[85%] bg-purple-500"></div>
      <div className="h-[15%] p-2 w-full flex flex-col ">
        <p className="dark:text-white">Introductory Technology</p>
        <small className="text-gray-400">By zaha bolaji</small>
      </div>
    </Link>
  );
};

export default Book;
