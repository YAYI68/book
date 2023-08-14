"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getSession from "@/backend/getSession";
import { getCurrentSession } from "@/utils";
import { pacifico } from "@/utils/font";

import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const SignUpForm = async (props: Props) => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleOnChecked = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleOnChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formValues.firstname.trim() ||
      !formValues.lastname.trim() ||
      !formValues.email.trim() ||
      !formValues.password.trim() ||
      formValues.confirmPassword.trim()
    ) {
      console.log("Invalid Password");
      return;
    }
    if (formValues.firstname.trim() !== formValues.confirmPassword.trim()) {
      console.log("Invalid Password ");
      return;
    }
    const data = {
      ...formValues,
    };
    console.log({ data });
    // const response = await fetch("/api/auth/credentials/", {
    //   method: "POST",
    //   cache: "no-store",
    //   body: JSON.stringify({ ...data }),
    // });
    // if (!response.ok) {
    // }
  };

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
          onChange={handleOnChange}
          type="text"
          placeholder="FirstName"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          onChange={handleOnChange}
          type="text"
          placeholder="LastName"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          onChange={handleOnChange}
          type="email"
          placeholder="Email"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />

        <input
          onChange={handleOnChange}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <input
          onChange={handleOnChange}
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
        />
        <div className="w-fit flex items-center gap-2">
          <input type="checkbox" name="" id="show_password" />
          <label htmlFor="show_password" className="dark:text-gray-300">
            Show password
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
