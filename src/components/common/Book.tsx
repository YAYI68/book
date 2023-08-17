import Link from "next/link";
import React from "react";

type Props = {};

const Book = (props: Props) => {
  return (
    <div className="h-[23rem] w-full md:w-[43%] lg:w-[23%]">
      <div className="w-full h-[85%] bg-purple-500 relative overflow-hidden group">
        <div className="absolute w-full transition-[transform] bottom-0 left-0 translate-y-[105%] flex p-2 justify-between  group-hover:translate-y-0 bg-white">
          <Link
            href={"/"}
            className="py-2 px-4 rounded border hover:bg-red-500 hover:text-white "
          >
            Add to wishlist
          </Link>
          <Link
            href={"/"}
            className="py-2 px-4 rounded border hover:bg-red-500 hover:text-white"
          >
            Read
          </Link>
        </div>
      </div>
      <Link
        href={"/books/detail"}
        className="h-[15%] p-2 w-full flex flex-col group"
      >
        <p className="dark:text-white group-hover:underline">
          Introductory Technology
        </p>
        <small className="text-gray-400 group-hover:underline">
          By zaha bolaji
        </small>
      </Link>
    </div>
  );
};

export default Book;
