import { FileIcon, SuccessCheckIcon } from "@/components/ui/svg";
import { useState } from "react";

const FileUploadedSuccess = () => {
  return (
    <div className="w-full h-[20rem] rounded-md bg-white dark:bg-gray-700 flex flex-col items-center justify-center">
      <label
        htmlFor="file"
        className="h-full w-full flex flex-col items-center justify-center cursor-pointer"
      >
        <SuccessCheckIcon className="h-[80%]  w-[80%] dark:fill-white fill-black" />
        <p className="dark:text-white text-center text-xs md:text-base">
          File uploaded successfully
        </p>
        <input type="file" id="file" className="hidden" />
      </label>
    </div>
  );
};

type Props = {};

const NewSavedBooks = (props: Props) => {
  const [fileType, setFileType] = useState("note");
  const [bookFile, setBookFile] = useState<string | ArrayBuffer>("");
  const [formValues, setFormValues] = useState({
    title: "",
    note: "",
  });

  const handleOnChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        setBookFile(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form action="" className=" w-[80%] lg:w-[60%] p-4 ">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className="w-full p-2 border-2 rounded-md outline-none"
          onChange={handleOnChange}
        />
        <p className="dark:text-white my-4">Book Option :</p>
        <div className="p-1 w-fit flex items-center bg-slate-500 rounded-md mb-4">
          <button
            type="button"
            className={` rounded-md  px-4 py-1 ${
              fileType === "note"
                ? "dark:bg-white bg-black text-white dark:text-black"
                : ""
            }`}
            onClick={() => setFileType("note")}
          >
            note
          </button>
          <button
            type="button"
            className={` rounded-md px-4 py-1 ${
              fileType === "file"
                ? "dark:bg-white bg-black text-white dark:text-black"
                : ""
            }`}
            onClick={() => setFileType("file")}
          >
            file
          </button>
        </div>
        <div className="">
          {fileType === "note" ? (
            <div>
              <textarea
                className="w-full h-[20rem]  p-2 border-2 rounded-md outline-none"
                name="note"
                id=""
                placeholder="Write a note"
                onChange={handleOnChange}
              />
            </div>
          ) : fileType === "file" && bookFile ? (
            <FileUploadedSuccess />
          ) : fileType === "file" && !bookFile ? (
            <div className="w-full h-[20rem] rounded-md bg-white dark:bg-gray-700 flex flex-col items-center justify-center">
              <label
                htmlFor="file"
                className="h-full w-full flex flex-col items-center justify-center cursor-pointer"
              >
                <FileIcon className="h-[80%]  w-[80%] dark:fill-white fill-black" />
                <p className="dark:text-white text-center text-xs md:text-base">
                  Please click here to{" "}
                  <span className="text-blue-500 underline">upload</span> a file
                </p>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleFileInputChange}
                />
              </label>
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="p-4 my-4 bg-black text-white text-center w-full rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewSavedBooks;
