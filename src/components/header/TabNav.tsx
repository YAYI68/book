import Link from "next/link";
import React from "react";

type Props = {};

const TabNav = (props: Props) => {
  const active = true;
  return (
    <div className="flex w-full flex-col items-center lg:items-start ">
      <ul className="w-[80%] flex items-center p-2 lg:w-[40%] justify-center gap-4">
        <li>
          <Link
            href={""}
            className={`${
              active ? "dark:text-white" : "dark:text-gray-400"
            } cursor-pointer relative before:hover:w-fit before:w-0  before:h-1 before:rounded before:transition-[width] before:duration-150 before:absolute before:left-0 before:bottom-[-.2rem] before:bg-blue-500;`}
          >
            AllBooks
          </Link>
        </li>
        <li>
          <Link href={""} className="dark:text-gray-400">
            Wishlist
          </Link>
        </li>
        <li>
          <Link href={""} className="dark:text-gray-400">
            LocalBooks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TabNav;
