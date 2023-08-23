import LibraryBookList from "@/components/common/LibraryBookList";

type Props = {};

const AllLibraryBooks = (props: Props) => {
  return (
    <div className="w-full mt-4 flex flex-col">
      <LibraryBookList
        seeMoreHref="/books?catalog=classic"
        title="Reading Books"
      />
      <LibraryBookList
        seeMoreHref="/books?catalog=classic"
        title="Downloaded Books"
      />
    </div>
  );
};

export default AllLibraryBooks;
