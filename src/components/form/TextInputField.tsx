import React from "react";

type Props = {
  label?: string;
  className?: string;
  name?: string;
  defaultValue?: string;
  onChange?: React.Dispatch<React.SetStateAction<string | null>>;
  placeholder?: string;
};

const TextInputField = (props: Props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name} className="dark:text-white font-medium">
        {props.label}
      </label>
      <br />
      <input
        type="text"
        defaultValue={props.defaultValue}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        className="p-2 w-full text-black outline-none border-primary border rounded-md"
      />
    </div>
  );
};

export default TextInputField;
