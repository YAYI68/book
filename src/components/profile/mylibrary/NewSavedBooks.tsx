import { useState } from "react";

type Props = {};

const NewSavedBooks = (props: Props) => {
  const [fileType, setFileType] = useState("note");
  return (
    <div className="w-full flex flex-col items-center">
      <form action="" className=" w-[80%] lg:w-[60%] p-4 ">
        <input
          type="text"
          placeholder="Book Title"
          className="w-full p-2 border-2 rounded-md outline-none"
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
          {/* <div>
            <textarea
              className="w-full h-[20rem]  p-2 border-2 rounded-md outline-none"
              name=""
              id=""
              placeholder="Write a note"
            />
          </div> */}
          <div className="w-full h-[20rem]  bg-white">
            <div className="h-[10rem] w-[10rem]">
                <File
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewSavedBooks;
