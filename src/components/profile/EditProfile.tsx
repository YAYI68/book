"use client";
import React, { useState } from "react";
import { SelectInput, TextInputField } from "../form";
import { Button } from "../ui";
import { ArrowleftIcon } from "../ui/svg";
import Link from "next/link";
import { useDataFetcher } from "@/hooks";
import { Loader } from "../shared";

type Props = {};

const EditProfile = (props: Props) => {
  const { data, isLoading, error } = useDataFetcher({
    key: "profile",
    path: "account/profile",
  });

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
  });
  console.log({ data });
  if (isLoading) {
    return <Loader />;
  }

  const handleSubmit = () => {};
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
        <form className="w-full py-2 flex gap-4 flex-col lg:flex-row lg:flex-wrap lg:justify-between">
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="First Name"
              placeholder="firstname"
              defaultValue={data.profile.firstname}
              onChange={}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="Last Name"
              placeholder="lastname"
              defaultValue={data.profile.lastname}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="Email Address"
              placeholder="youremail@email.com"
              defaultValue={data.profile.email}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%] lg:mt-6">
            <SelectInput
              placeholder="Gender"
              className="bg-white"
              value={data.profile?.gender}
              options={["MALE", "FEMALE"]}
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
