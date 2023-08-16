"use client";
import React, { useState } from "react";
import { SelectInput, TextInputField } from "../form";
import { Button } from "../ui";
import { ArrowleftIcon, EditIcon } from "../ui/svg";
import Link from "next/link";
import { useDataFetcher } from "@/hooks";
import { Loader } from "../shared";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";
import { convertToBase64 } from "@/utils/utils";
import Image from "next/image";
import DefaultImage from "../../../public/images/defaultImage.png";

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
  const [imgFile, setImageFile] = useState();
  const [gender, setGender] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.addEventListener("load", () => {
      setImageFile(reader.result);
    });
  };

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
      image: imgFile,
      gender,
    };
    const response = await fetch("/api/account/profile", {
      method: "PATCH",
      cache: "no-store",
      body: JSON.stringify({ ...data }),
    });
    const result = await response.json();
    console.log({ result });
    if (response.ok) {
      toast.success("Profile Updated Successfully");
      router.push("/profile");
    } else {
      toast.error("Error occur while updating your status");
    }
  };
  return (
    <div className="w-full flex flex-col gap-4 items-center lg:items-start lg:flex-row">
      <div className="w-[10rem] h-[10rem] relative overflow-hidden lg:w-[20%] lg:justify-between lg:h-[15rem] rounded-[50%] bg-green-500">
        {!imgFile && !data.profile.image ? (
          <Image src={DefaultImage} alt="profile" fill />
        ) : (
          <Image src={imgFile ?? data.profile.image} alt="profile" fill />
        )}
        <label
          htmlFor="upload"
          className="absolute cursor-pointer bottom-8 right-8 lg:bottom-12 lg:right-12 rounded-[50%]  h-[2rem] bg-secondary w-[2rem] flex flex-col justify-center items-center"
        >
          <EditIcon classname=" text-red-500" />
          <input
            type="file"
            onChange={handleUpload}
            id="upload"
            name="image"
            value=""
            className="hidden"
          />
        </label>
      </div>
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
              name="lastname"
              placeholder="lastname"
              defaultValue={data.profile.lastname}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="Email Address"
              name="email"
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
