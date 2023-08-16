"use client";
import React, { useState } from "react";
import { SelectInput, TextInputField } from "../form";
import { Button } from "../ui";
import { ArrowleftIcon } from "../ui/svg";
import Link from "next/link";
import { useDataFetcher } from "@/hooks";
import { Loader } from "../shared";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";

type Props = {};

const EditProfile = (props: Props) => {
  const { data, isLoading, error } = useDataFetcher({
    key: "profile",
    path: "account/profile",
  });
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [gender, setGender] = useState("");

  const handleOnChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  if (isLoading) {
    return <Loader />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...formValues,
      gender,
    };
    const response = await fetch("/api/account/profile", {
      method: "PATCH",
      cache: "no-store",
      body: JSON.stringify({ data }),
    });
    const result = await response.json();
    console.log({ result });
  };
  return (
    <div className="w-full flex flex-col gap-4 items-center lg:items-start lg:flex-row">
      <div className="w-[10rem] h-[10rem] lg:w-[20%] lg:justify-between lg:h-[15rem] rounded-[50%] bg-green-500"></div>
      <div className="flex w-full  flex-col lg:w-[70%]">
        <div className="w-full">
          <Link
            href={"/profile"}
            className="dark:bg-white dark:text-black bg-black items-center text-white flex gap-2 py-2 w-fit  px-2 rounded"
          >
            <span>
              <ArrowleftIcon className="h-4 w-4 " />
            </span>{" "}
            <span>back</span>
          </Link>
          <h3 className="text-[1.5rem] lg:text-[2rem] text-center lg:text-start font-semibold dark:text-white">
            Personal Information
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full py-2 flex gap-4 flex-col lg:flex-row lg:flex-wrap lg:justify-between"
        >
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="First Name"
              name="firstname"
              placeholder="firstname"
              defaultValue={data.profile.firstname}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="Last Name"
              placeholder="lastname"
              defaultValue={data.profile.lastname}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="Email Address"
              placeholder="youremail@email.com"
              defaultValue={data.profile.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%] lg:mt-6">
            <SelectInput
              placeholder="Gender"
              className="bg-white"
              value={gender ? gender : data.profile?.gender}
              options={[{ name: "Male" }, { name: "Female" }]}
              onChange={setGender}
            />
          </div>
          <Button
            loading={false}
            className="w-full rounded bg-red-500 p-2 text-center font-medium text-white"
            content="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
