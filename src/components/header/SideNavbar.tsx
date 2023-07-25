import Link from "next/link";
import React from "react";
import { UserIcon, EditIcon, WalletIcon, KeyIcon } from "../ui/svg";

type Props = {};

const SideNavbar = (props: Props) => {
  return (
    <nav className="w lg:w-[12%] py-[1.5rem] px-2 rounded-md dark:bg-gray-900 fixed left-0 bg-gray-200">
      <ul className="flex flex-col">
        <li>
          <Link
            href={"/profile"}
            className="p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between"
          >
            {" "}
            <span className="w-[20%] text-center">
              {" "}
              <UserIcon classname="h-6 w-6 text-red-500" />{" "}
            </span>{" "}
            <span className="hidden w-[80%] lg:block text-[.9rem]">
              My Profile
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={"/profile/edit"}
            className="p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between"
          >
            {" "}
            <span className="w-[20%] text-center">
              {" "}
              <EditIcon classname="h-6 w-6 text-red-500" />{" "}
            </span>{" "}
            <span className="hidden w-[80%] text-[.9rem] lg:block">
              Update Profile
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className="p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between"
          >
            {" "}
            <span className="w-[20%] text-center">
              {" "}
              <KeyIcon classname="h-6 w-6 text-red-500" />{" "}
            </span>{" "}
            <span className="hidden w-[80%] text-[.9rem] lg:block">
              Change Password
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={""}
            className="p-2 rounded-xl dark:text-white hover:bg-red-200 dark:text-gary-400 dark:hover:text-white font-semibold  flex justify-between"
          >
            {" "}
            <span className="w-[20%] text-center">
              {" "}
              <WalletIcon classname="h-6 w-6 text-red-500" />{" "}
            </span>{" "}
            <span className="hidden w-[80%] text-[.9rem] lg:block">
              Subscription
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
