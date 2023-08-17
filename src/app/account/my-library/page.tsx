import Book from "@/components/common/Book";
import BookCategoryList from "@/components/common/BookCategoryList";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full mt-4 flex flex-col">
      <BookCategoryList
        seeMoreHref="/books?catalog=classic"
        title="Reading Books"
      />
      <BookCategoryList
        seeMoreHref="/books?catalog=classic"
        title="Downloaded Books"
      />
    </div>
  );
};

export default page;
