import { BookCategorySideBar, BookHero } from "@/components/book";
import BookCategoryList from "@/components/common/BookCategoryList";
import BookListDetail from "@/components/common/BookListDetail";
import { Main } from "@/components/ui";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Main>
      <BookHero />
      <section className="bg-white w-full flex flex-col items-center py-[3rem] dark:bg-black ">
        <div className="w-[90%] flex ">
          <div className="md:w-[20%]">
            <BookCategorySideBar />
          </div>
          <div className="md:w-[80%] flex flex-col gap-2 md:py-[3rem]">
            <BookCategoryList title="Art" />
            <BookCategoryList title="Top pick for you" />
            <BookListDetail title={"RECENTLY PUBLISHED"} />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default page;
