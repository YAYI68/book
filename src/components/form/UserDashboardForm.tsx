"use client";
import React, { useState } from "react";
import { EditIcon } from "../ui/svg";
import Image from "next/image";

type Props = {};

const UserDashboardForm = (props: Props) => {
  const [formValues, setFormvalues] = useState({});

  const handleOnChange = (event) => {
    setFormvalues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {});
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {};
  const goBack = () => {};
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full lg:w-[90%] relative overflow-scroll h-full">
        <div className="flex w-full flex-col bg-white items-center lg:flex-row lg:justify-between sticky top-0 px-2 ">
          <div className="w-full lg:w-[60%]">
            <h3 className="font-semibold lg:text-[1.2rem]">User Information</h3>
            <p className="text-primary font-jost text-xs lg:text-[1rem]">
              Enter the required information below to register. You can change
              it anytime.{" "}
            </p>
          </div>
          <div className="w-full lg:w-[15%] flex items-center mt-2 justify-between">
            <button
              onClick={() => goBack()}
              type="button"
              className="p-2 border border-primary rounded-md text-primary text-xs lg:text-[1rem]"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="p-2 border border-primary bg-primary text-white rounded-md text-xs lg:text-[1rem]"
            >
              Save
            </button>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col lg:flex-row lg:justify-between gap-4 ">
          <div className="w-full flex items-center lg:items-baseline justify-center lg:w-[30%] lg:py-8">
            <div className="h-[10rem] w-[10rem] lg:h-[15rem] lg:w-[15rem] rounded-[50%] relative overflow-hidden">
              <Image src={""} alt="" className="h-full w-full" />
              <label
                htmlFor="upload"
                className="absolute cursor-pointer bottom-8 right-8 lg:bottom-12 lg:right-12 rounded-[50%]  h-[2rem] bg-secondary w-[2rem] flex flex-col justify-center items-center"
              >
                <EditIcon classname="text-primary" />
                <input
                  type="file"
                  onChange={handleUpload}
                  id="upload"
                  name=""
                  value=""
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="w-full lg:w-[60%]  p-4">
            <form className="flex flex-col gap-2">
              <div className="">
                <label htmlFor="email" className="text-primary font-medium">
                  Email Address
                </label>
                <br />
                <input
                  type="email"
                  defaultValue={""}
                  id="email"
                  name="email"
                  placeholder="youremail@mail.com"
                  className="p-2 w-full outline-none border-primary border rounded-md"
                />
              </div>
              <div className="">
                <label htmlFor="email" className="text-primary font-medium">
                  Full Name
                </label>
                <br />
                <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between">
                  <input
                    type="text"
                    defaultValue={""}
                    onChange={handleOnChange}
                    name="firstname"
                    placeholder="First Name"
                    className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                  />
                  <input
                    type="text"
                    defaultValue={""}
                    name="lastname"
                    onChange={handleOnChange}
                    placeholder="Last name"
                    className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between">
                <div className="lg:w-[45%] w-full">
                  <label htmlFor="" className="text-primary font-medium">
                    Gender
                  </label>
                  <br />
                  <select
                    onChange={handleOnChange}
                    defaultValue={""}
                    name="gender"
                    className="p-2 w-full  outline-none border-primary border rounded-md"
                  >
                    <option></option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
                <div className="lg:w-[45%] w-full">
                  <label htmlFor="" className="text-primary font-medium">
                    Gender
                  </label>
                  <br />
                  <select
                    onChange={handleOnChange}
                    defaultValue={""}
                    name="gender"
                    className="p-2 w-full  outline-none border-primary border rounded-md"
                  >
                    <option></option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap">
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="age"
                  defaultValue={""}
                  placeholder="Age"
                  className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                />
                <select
                  onChange={handleOnChange}
                  name="country"
                  className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                >
                  <option value="Nigeria">Nigeria</option>
                </select>
                <input
                  type="text"
                  name="state"
                  defaultValue={""}
                  onChange={handleOnChange}
                  placeholder="State"
                  className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                />
              </div>
              <div className="">
                <label htmlFor="" className="text-primary font-medium">
                  Medical Information
                </label>
                <br />
                <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap">
                  <input
                    type="text"
                    defaultValue={""}
                    name="blood_group"
                    onChange={handleOnChange}
                    placeholder="Blood Group"
                    className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                  />
                  <input
                    type="text"
                    defaultValue={""}
                    name="marital_status"
                    onChange={handleOnChange}
                    placeholder="Marital Status"
                    className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                  />
                  <input
                    type="text"
                    name="genotype"
                    defaultValue={""}
                    onChange={handleOnChange}
                    placeholder="Genotype"
                    className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                  />
                  <input
                    type="text"
                    name="weight"
                    defaultValue={""}
                    onChange={handleOnChange}
                    placeholder="Weight"
                    className="p-2 w-full lg:w-[45%] outline-none border-primary border rounded-md"
                  />
                  <textarea
                    name="medical_history"
                    defaultValue={""}
                    onChange={handleOnChange}
                    placeholder="Medical history"
                    className="p-2 w-full lg:w-full outline-none border-primary border rounded-md"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardForm;
