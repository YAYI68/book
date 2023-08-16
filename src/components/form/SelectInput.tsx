"use client";
import React, { Dispatch, useState } from "react";
import { ArrowDownIcon } from "../ui/svg";

type Props = {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  className?: string;
  options?: any[];
  label?: string;
  onChange?: Dispatch<React.SetStateAction<string | null>>;
};

const SelectInput = (props: Props) => {
  const { className, value, options, label, onChange, placeholder } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`relative ${className} cursor-pointer rounded-md border border-gray-400`}
    >
      <div className="flex  p-2 w-full h-full items-center justify-between">
        <p className="font-medium">{value ? value : placeholder}</p>
        <button className="flex flex-col items-center justify-center">
          <ArrowDownIcon className="text-black h-4 w-4 " />
        </button>
      </div>
      {toggle ? (
        <div className="absolute z-[2] p-2 rounded-md flex flex-col items-center border-gray-400 bg-white border w-full top-full left-0 ">
          {options.length > 0 ? (
            options.map((option, i) => (
              <button
                key={option.name}
                onClick={() => onChange(option.name)}
                className="hover:bg-black hover:text-white   w-full p-1 text-left rounded-sm capitalize"
              >
                {option.name}
              </button>
            ))
          ) : (
            <button className="hover:bg-black hover:text-white w-full p-1 text-left rounded-sm text-gray-400 dark:text-black">
              No {label} found
            </button>
          )}
        </div>
      ) : (
        ""
      )}
      <small className="absolute top-0 left-[5%] -translate-y-[55%] text-[.8rem] bg-gray-400 p-1   bg-transparent w-fit">
        {label}
      </small>
    </div>
  );
};

export default SelectInput;
