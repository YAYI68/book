import { SeeMoreLink } from "../ui";
import LibraryBook from "./LibraryBook";

type Props = {
  title: string;
  seeMoreHref?: string;
};

const LibraryBookList = (props: Props) => {
  const { title, seeMoreHref } = props;
  return (
    <div className=" w-full flex flex-col items-center py-[3rem] ">
      <div className="w-[90%] flex items-center md:items-start flex-col gap-4 ">
        <h3 className="font-semibold text-[1.5rem] dark:text-white capitalize">
          {title}
        </h3>
        <div className="w-full flex flex-col gap-2 items-center md:flex-row md:justify-between flex-wrap ">
          <LibraryBook />
          <LibraryBook />
          <LibraryBook />
          <LibraryBook />
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

export default LibraryBookList;
