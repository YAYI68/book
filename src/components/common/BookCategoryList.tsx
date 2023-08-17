import React from "react";
import Book from "./Book";
import { SeeMoreLink } from "../ui";

type Props = {
  title: string;
  seeMoreHref?: string;
};

const BookCategoryList = (props: Props) => {
  const { title, seeMoreHref } = props;
  return (
    <div className=" w-full flex flex-col items-center py-[3rem] ">
      <div className="w-[90%] flex items-center md:items-start flex-col gap-4 ">
        <h3 className="font-semibold text-[1.5rem] dark:text-white capitalize">
          {title}
        </h3>
        <div className="w-full flex flex-col gap-2 items-center md:flex-row md:justify-between flex-wrap ">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
        {seeMoreHref ? (
          <SeeMoreLink className="md:self-end" href="/books?catalog=classic" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BookCategoryList;
