"use client";

import React, { useState } from "react";
import { EditIcon } from "../ui/svg";
import Image from "next/image";
import SelectInput from "./SelectInput";
import TextInputField from "./TextInputField";
import TextAreaField from "./TextAreaField";
import FileInPutField from "./FileInPutField";
import { useDataFetcher } from "@/hooks";
import { createBook } from "@/utils/actions";
import { useAppContext } from "@/context/AppProvider";
import { Loader } from "../shared";

const BASE_URL = process.env.BASE_URL;

type Props = {};
const BookForm = (props: Props) => {
  const { headers } = useAppContext();
  console.log({ headers });
  const { data: genreData, isLoading } = useDataFetcher({
    key: "/api/genre",
    path: "genre",
  });
  const [file, setFile] = useState<any>({
    note: "",
    image: "",
  });
  const [formValues, setFormValues] = useState({
    author: "",
    title: "",
    description: "",
    edition: "",
  });

  const handleOnChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [genre, setGenre] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFile((prev) => ({ ...prev, [event.target.name]: reader.result }));
    });
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  console.log({ file });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ("use server ");
    const data = {
      author: formValues.author,
      title: formValues.title,
      description: formValues.description,
      image: file.image,
      genre: genre,
      edition: formValues.edition,
      note: file.note,
    };
    try {
      const res = await fetch(`/api/book/`, {
        method: "POST",
        cache: "no-store",
        credentials: "include",
        headers: headers,
        body: JSON.stringify({ ...data }),
      });
      console.log({ res });
      if (!res.ok) {
        console.log(" Error is here");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const goBack = () => {};

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full lg:w-[90%] relative overflow-scroll h-full">
        <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between sticky top-0 px-2 ">
          <div className="w-full lg:w-[60%]"></div>
          <div className="w-[70%] lg:w-[15%] flex items-center mt-2 justify-between">
            <button
              onClick={() => goBack()}
              type="button"
              className="p-2 border dark:border-white text-red-500 border-black border-primary rounded-md text-primary text-xs lg:text-[1rem]"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="p-2 border dark:border-white border-black border-primary bg-primary text-red-500 rounded-md text-xs lg:text-[1rem]"
            >
              Save
            </button>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col lg:flex-row lg:justify-between gap-4 ">
          <div className="w-full flex items-center lg:items-baseline justify-center lg:w-[30%] lg:py-8">
            <div className="h-[10rem] w-[10rem] flex items-center justify-center lg:h-[15rem]  lg:w-[15rem] rounded-[50%] relative overflow-hidden">
              {file.image ? (
                <Image src={file.image} alt="" fill />
              ) : (
                <div className="w-[80%] h-[80%] bg-gray-400 absolute flex items-center justify-center border border-yellow-500">
                  <p className="text-red-500">Book Cover</p>
                </div>
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
          </div>

          <div className="w-full lg:w-[60%]  p-4">
            <form className="flex flex-col gap-2">
              <div>
                <TextInputField
                  defaultValue={""}
                  className="dark:text-white"
                  label="Title"
                  name="title"
                  placeholder="Book Title"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <TextInputField
                  defaultValue={""}
                  className="dark:text-white"
                  label="Author"
                  name="author"
                  placeholder="Book Author"
                  onChange={handleOnChange}
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap lg:items-center">
                <TextInputField
                  label="Editon"
                  className="dark:text-white"
                  defaultValue={""}
                  name="edition"
                  placeholder="Book Edition"
                  onChange={handleOnChange}
                />
              </div>
              <div className="w-full lg:w-[45%]">
                <SelectInput
                  className="dark:text-white dark:border-white"
                  placeholder="Genre"
                  options={genreData.data}
                  label="genre"
                  onChange={setGenre}
                />
              </div>
              <div className="">
                <div className="w-full flex flex-col lg:flex-row gap-2 lg:justify-between lg:flex-wrap">
                  <FileInPutField
                    label="Upload Note"
                    className="dark:text-white "
                    name="note"
                    onChange={handleUpload}
                  />
                  <TextAreaField
                    name="description"
                    className="dark:text-white"
                    onChange={handleOnChange}
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

export default BookForm;
