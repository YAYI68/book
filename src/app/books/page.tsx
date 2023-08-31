import { BookCategorySideBar, BookHero } from "@/components/book";
import BookCategoryList from "@/components/common/BookCategoryList";
import BookListDetail from "@/components/common/BookListDetail";
import { Main } from "@/components/ui";

type AllBookProps = {
  title?: string;
};

const AllBookList = (props: AllBookProps) => {
  const { title } = props;
  return (
    <Main>
      <section className="bg-white w-full flex flex-col items-center py-[3rem] dark:bg-black ">
        <div className="w-[90%] flex ">
          <div className="md:w-[15%]">
            <BookCategorySideBar />
          </div>
          <div className="md:w-[85%] flex flex-col gap-2 md:py-[3rem]">
            <BookCategoryList title={title} />
          </div>
        </div>
      </section>
    </Main>
  );
};

const Page = ({ searchParams }) => {
  const { catalog, search, category } = searchParams;
  if (catalog) {
    return <AllBookList title={catalog} />;
  }
  if (search) {
    return <AllBookList title={search} />;
  }
  if (category) {
    return <AllBookList title={category} />;
  }

  return (
    <Main>
      <BookHero />
      <section className="bg-white w-full flex flex-col items-center py-[3rem] dark:bg-black ">
        <div className="w-[90%] flex ">
          <div className="md:w-[15%]">
            <BookCategorySideBar />
          </div>
          <div className="md:w-[85%] flex flex-col gap-2 md:py-[3rem]">
            <BookCategoryList title="Programming" />
            <BookCategoryList title="Top pick for you" />
            <BookListDetail title={"RECENTLY PUBLISHED"} />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Page;
