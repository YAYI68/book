import React from "react";

type Props = {
  name?: string;
  onChange?: (event: any) => void;
  label?: string;
  className?: string;
};

const FileInPutField = (props: Props) => {
  const { onChange, name, label, className } = props;
  return (
    <div className={`w-full ${className}`}>
      <label htmlFor="note" className="">
        {label}
      </label>
      <input
        name={name}
        defaultValue={""}
        onChange={(e) => onChange(e)}
        type="file"
        className="p-2 w-full lg:w-full  outline-none border-primary border rounded-md"
      />
    </div>
  );
};

export default FileInPutField;
