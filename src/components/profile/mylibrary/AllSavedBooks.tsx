import { NoItemFound } from "@/components/notFound";
import { useSavedBookStore } from "@/store";

type Props = {};

const AllSavedBooks = () => {
  const { setBookStatus } = useSavedBookStore();
  return (
    <div className="w-full flex flex-col mt-4">
      <button
        onClick={() => setBookStatus("new")}
        className="w-fit self-end rounded-md py-2 px-4 border-2 block bg-white dark:bg-black dark:text-white shadow-md cursor-pointer"
      >
        add book
      </button>
      <NoItemFound message="You have no saved books here at the moment." />
    </div>
  );
};

export default AllSavedBooks;
