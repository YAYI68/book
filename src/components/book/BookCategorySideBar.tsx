import Link from "next/link";
import React from "react";

type Props = {};

const BookCategorySideBar = (props: Props) => {
  return (
    <div className="hidden md:w-full md:flex md:flex-col md:gap-4">
      <p className="dark:text-white font-semibold text-[2rem] ">Category</p>
      <div className="w-full p-[2rem] text-xs rounded-md bg-gray-200 dark:bg-gray-900">
        <ul className="w-full ">
          <li className="w-full">
            <Link
              href=""
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500  hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Art
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Science
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Social Science
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              History
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Government
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Computer science
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCategorySideBar;
