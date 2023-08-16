"use client";
import { pacifico } from "@/utils/font";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Spinner } from "../ui";
import { redirect } from "next/navigation";

type Props = {};

const SignUpForm = (props: Props) => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [required, setRequired] = useState({
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  console.log({ required });

  const handleOnChecked = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleOnBlur = (event) => {
    if (!event.target.value.trim()) {
      setRequired((prev) => ({
        ...prev,
        [event.target.name]: true,
      }));
    }
  };

  const handleOnChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    if (event.target.value.trim()) {
      setRequired((prev) => ({
        ...prev,
        [event.target.name]: false,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, confirmPassword } =
      formValues;
    const data = {
      ...formValues,
    };
    console.log({ data });
    if (
      !firstname.trim() &&
      !lastname.trim() &&
      !email.trim() &&
      !password.trim() &&
      !confirmPassword.trim()
    ) {
      console.log("Incomplete Credentials");
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      console.log("Password Mismatch");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("/api/auth/credentials/", {
        method: "POST",
        cache: "no-store",
        body: JSON.stringify({ ...data }),
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message);
        setLoading(false);
        redirect("/login");
      }
      toast.error(res_data.error);
      setLoading(false);
      return;
    } catch (error) {
      toast.error(error.error);
    }
  };

  return (
    <div className="w-[80%] lg:w-[60%] lg:flex h-[90%] lg:h-[80%] flex flex-col items-center p-4 ">
      <h3
        className={`text-[3rem] font-semibold dark:text-white  text-center ${pacifico.className}`}
      >
        Studee
      </h3>
      <p className="dark:text-gray-300 text-[1.2rem]">create an account</p>
      <form
        onSubmit={handleSubmit}
        className="mt-[2rem] w-full flex flex-col gap-4"
      >
        <div className="w-full flex flex-col">
          <input
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            type="text"
            name="firstname"
            placeholder="FirstName*"
            className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
          />
          {required.firstname ? (
            <small className="text-red-500 text-xs">
              This field is required *
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col">
          <input
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            type="text"
            placeholder="LastName*"
            name="lastname"
            className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
          />
          {required.lastname ? (
            <small className="text-red-500 text-xs">
              This field is required *
            </small>
          ) : (
            ""
          )}
        </div>

        <div className="w-full flex flex-col">
          <input
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            type="email"
            placeholder="Email*"
            name="email"
            className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
          />
          {required.email ? (
            <small className="text-red-500 text-xs">
              This field is required *
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex flex-col">
          <input
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            type={showPassword ? "text" : "password"}
            placeholder="Password*"
            name="password"
            className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
          />
          {required.password ? (
            <small className="text-red-500 text-xs">
              This field is required *
            </small>
          ) : (
            ""
          )}
          <small className="dark:text-gray-300">
            hint:The password must contain atleast 8 character
          </small>
        </div>
        <div className="w-full flex flex-col">
          <input
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password *"
            name="confirmPassword"
            className="px-4  py-2 w-full outline-none border dark:bg-gray-800 dark:text-white rounded "
          />
          {required.confirmPassword ? (
            <small className="text-red-500 text-xs">
              This field is required *
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="w-fit flex items-center gap-2">
          <input
            onChange={handleOnChecked}
            type="checkbox"
            name=""
            id="show_password"
          />
          <label htmlFor="show_password" className="dark:text-gray-300">
            Show password
          </label>
        </div>
        <button className="w-full text-center bg-red-500 text-white p-2 rounded-md font-medium flex flex-col items-center justify-center">
          {loading ? <Spinner className="h-4 w-4" /> : <span>SignUp</span>}
        </button>
      </form>
      <div className="flex w-fit self-end mt-[1rem] lg:mt-[1.5rem] gap-1">
        <p className="dark:text-white">Already have an account?</p>
        <Link href={"/login"} className="text-red-500 ">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
