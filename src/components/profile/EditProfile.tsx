import React from "react";
import { SelectInput, TextInputField } from "../form";
import { Button } from "../ui";

type Props = {};

const EditProfile = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center lg:items-start lg:flex-row">
      <div className="w-[10rem] h-[10rem] lg:w-[20%] lg:justify-between lg:h-[15rem] rounded-[50%] bg-green-500"></div>
      <div className="flex w-full  flex-col lg:w-[70%]">
        <div className="w-full">
          <button className="dark:bg-white dark:text-black bg-black text-white  py-2  px-6 rounded">
            back
          </button>
          <h3 className="text-[1.5rem] lg:text-[2rem] text-center lg:text-start font-semibold dark:text-white">
            Personal Information
          </h3>
        </div>
        <form className="w-full py-2 flex gap-4 flex-col lg:flex-row lg:flex-wrap lg:justify-between">
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField label="First Name" placeholder="firstname" />
          </div>
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField label="Last Name" placeholder="lastname" />
          </div>
          <div className="flex flex-col w-full lg:w-[47%]">
            <TextInputField
              label="Email Address"
              placeholder="youremail@email.com"
            />
          </div>
          <div className="flex flex-col w-full lg:w-[47%] lg:mt-6">
            <SelectInput
              placeholder="gender"
              className="bg-white"
              value="FEMALE"
              options={["MALE", "FEMALE"]}
            />
          </div>
          <Button
            className="w-full rounded bg-red-500 p-2 text-center font-medium text-white"
            content="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
