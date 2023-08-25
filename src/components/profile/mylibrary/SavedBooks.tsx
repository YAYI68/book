import { NoItemFound } from "@/components/notFound";
import Link from "next/link";

type Props = {};

const SavedBooks = (props: Props) => {
  return (
    <div className="w-full flex flex-col mt-4">
      <Link
        href={""}
        className="w-fit self-end rounded-md py-2 px-4 border bg-white dark:bg-black dark:text-white shadow-md cursor-pointer"
      >
        saved a book
      </Link>
      <NoItemFound message="You have no saved books here at the moment." />
    </div>
  );
};

export default SavedBooks;
