import React from "react";
import Spinner from "./Spinner";

type Props = {
  loading?: boolean;
  onClick?: () => {};
  className?: string;
  content?: string;
};

const Button = (props: Props) => {
  const { loading, onClick, className, content } = props;
  return (
    <button onClick={onClick} className={` ${className}`}>
      {loading ? (
        <span>
          <Spinner />
        </span>
      ) : (
        <span>{content}</span>
      )}
    </button>
  );
};

export default Button;
