import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getSession from "@/backend/getSession";
import { getCurrentSession } from "@/utils";
import { pacifico } from "@/utils/font";

import Link from "next/link";
import React from "react";

type Props = {};

const SignUpForm = async (props: Props) => {
  return (
    <div className="w-[80%] lg:w-[60%] lg:flex h-[90%] lg:h-[80%] flex flex-col items-center p-4 ">
      <h3
        className={`text-[3rem] font-semibold dark:text-white  text-center ${pacifico.className}`}
      >
        Studee
      </h3>
      <p className="dark:text-gray-300 text-[1.2rem]">create an account</p>
      <form action="" className="mt-[2rem] w-full flex flex-col gap-4">
        <input
          type="text"
          placeholder="FirstName"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          type="text"
          placeholder="LastName"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          type="text"
          placeholder="Phone No"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <div className="w-fit flex items-center gap-2">
          <input type="checkbox" name="" id="show_password" />
          <label htmlFor="show_password" className="dark:text-gray-300">
            Show password
          </label>
        </div>
        <div className="w-fit flex baseline gap-2">
          <input type="checkbox" name="" id="show_password" />
          <label htmlFor="show_password" className="dark:text-gray-300">
            by signing up you have agree to our terms and conditions
          </label>
        </div>
        <button className="w-full text-center bg-red-500 text-white p-2 rounded-md font-medium">
          SignUp
        </button>
      </form>
      <div className="flex w-fit self-end mt-[1rem] lg:mt-[1.5rem] gap-1">
        <p className="dark:text-white">Already have an account?</p>
        <Link href={"/login"} className="text-red-500">
          login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
