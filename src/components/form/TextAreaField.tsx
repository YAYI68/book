import React, { useState } from "react";

type Props = {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: any) => void;
  placeholder?: string;
  className?: string;
};

const TextAreaField = (props: Props) => {
  const { onChange, defaultValue, placeholder, className, value, name } = props;
  return (
    <div className={`${className} w-full`}>
      <label htmlFor="description" className="">
        Description
      </label>
      <textarea
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(event) => onChange(event)}
        placeholder={placeholder}
        className="p-2 w-full lg:w-full text-black outline-none border-primary border rounded-md"
      />
    </div>
  );
};

export default TextAreaField;
