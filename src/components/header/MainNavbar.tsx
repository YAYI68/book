"use client";
import { pacifico } from "@/utils/font";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { DarkIcon, LightIcon, SearchIcon, SystemIcon } from "../ui/svg";
import { Theme } from "../ui";
import { useAppContext } from "@/context/AppProvider";
import SearchInput from "../ui/SearchInput";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useClickAway } from "@/hooks";

type MainNavLinkProps = {
  className?: string;
  url?: string;
  name?: string;
};

const MainNavLink = (props: MainNavLinkProps) => (
  <li
    className={`p-2 ${props.className} cursor-pointer font-medium  text-gray-500 w-fit dark:text-gray-400 hover:text-black   text-center rounded hover:dark:text-white`}
  >
    <Link href={props.url} className="w-full">
      {props.name}
    </Link>
  </li>
);

type DropDownLinkProps = {
  url?: string;
  name?: string;
};

const DropDownLink = (props: DropDownLinkProps) => (
  <li className="w-full">
    <Link
      href={props.url}
      className=" w-full block dark:text-white text-xs hover:dark:bg-gray-500 p-2 rounded-md"
    >
      {props.name}
    </Link>
  </li>
);

type UserDropdownLinkProps = {
  onClickOut?: Dispatch<SetStateAction<boolean | null>>;
};

const UserDropdownLink = (props: UserDropdownLinkProps) => {
  const DropdownRef = useRef();
  const { onClickOut } = props;
  useClickAway(DropdownRef, () => onClickOut(false));
  return (
    <div
      ref={DropdownRef}
      className="w-[8rem] p-2 absolute top-[120%] border rounded dark:bg-gray-800 "
    >
      <DropDownLink url="/my-library" name="My Library" />
      <DropDownLink url="/wishlist" name="Wishlist" />
      <DropDownLink url="/profile" name="profile" />
      <DropDownLink url="" name="Subscription" />
      <DropDownLink url="" name="Logout" />
    </div>
  );
};

type MainNavbarProps = {};

const MainNavbar = (props: MainNavbarProps) => {
  const { data: user, status } = useSession();

  const { activeTheme, setActiveTheme } = useAppContext();
  const [displayTheme, setDisplayTheme] = useState<boolean | null>(false);
  const [displayUserDropdown, setDisplayUserDropDown] = useState(false);
  const [displaySearchInput, setDisplaySearchInput] = useState<boolean | null>(
    false
  );
  return (
    <nav className="hidden h-full w-full lg:flex lg:flex-col lg:items-center  bg-white dark:bg-black dark:text-white border-b-2 dark:border-b-gray-500">
      <div className="w-[90%]  px-2 h-full flex justify-between items-center">
        <Link href="/" className={`${pacifico.className} block text-[2rem]`}>
          Studee
        </Link>
        <div className="flex relative items-center justify-between w-[80%] xl:w-[60%]">
          <ul className="flex items-center w-[65%]  gap-4">
            <MainNavLink className="" name="books" url="/books" />
            <MainNavLink className="" name="pricing" url="/pricing" />
            <MainNavLink name="contact" url="contact" />
            <li
              onClick={() => setDisplaySearchInput(true)}
              className="w-fit p-2 cursor-pointer text-center font-medium text-gray-500  hover:text-black dark:text-gray-400 rounded hover:dark:text-white"
            >
              <p className="flex items-center gap-2 ">
                <span>Search</span>
                <span>
                  <SearchIcon classname="h-[1.3rem] w-[1.3rem]" />
                </span>
              </p>{" "}
            </li>
          </ul>
          {displaySearchInput ? (
            <SearchInput
              setDisplaySearchInput={setDisplaySearchInput}
              className="w-full absolute z-[3] top-full left-0"
            />
          ) : (
            ""
          )}
          {/* UnAuthenticated */}
          <ul className="flex font-medium items-center gap-4">
            {!user ? (
              <>
                <li className="py-2 px-4 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-black rounded hover:dark:text-white border dark:border-gray-500 hover:dark:border-white hover:border-black">
                  <button className="w-full" onClick={() => signIn()}>
                    Login
                  </button>
                </li>
                <li className="py-2 px-4 cursor-pointer text-gray-500 dark:text-black  rounded bg-black hover:text-white dark:bg-white hover:dark:bg-black hover:dark:text-white border hover:dark:border-white hover:border-black">
                  <Link href={"/sign-up"}>Signup</Link>
                </li>
              </>
            ) : (
              <>
                <MainNavLink name="my library" url="my-library" />
                <button
                  onClick={() => setDisplayUserDropDown(!displayUserDropdown)}
                  className="w-[2.5rem] h-[2.5rem] cursor-pointer rounded-[50%] bg-red-500"
                >
                  <Image src={""} alt="" />
                </button>
                {displayUserDropdown ? (
                  <UserDropdownLink onClickOut={setDisplayUserDropDown} />
                ) : (
                  ""
                )}
              </>
            )}
          </ul>
          <button
            onClick={() => setDisplayTheme(!displayTheme)}
            className="p-2 h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-[50%] border"
          >
            {activeTheme === "dark" ? (
              <DarkIcon classname="h-[1.2rem] w-[1.2rem]" />
            ) : activeTheme === "light" ? (
              <LightIcon classname="h-[1.2rem] w-[1.2rem]" />
            ) : activeTheme === "system" ? (
              <SystemIcon classname="h-[1.2rem] w-[1.2rem]" />
            ) : (
              ""
            )}
          </button>
          {displayTheme ? (
            <Theme
              setDisplayTheme={setDisplayTheme}
              setActiveTheme={setActiveTheme}
              classname=" w-[7rem] absolute border-2 top-[120%] z-[2] right-0"
              activeTheme={activeTheme}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
