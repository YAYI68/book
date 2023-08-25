import { NoItemFound } from "@/components/notFound";

type Props = {};

const AllLibraryBooks = (props: Props) => {
  return (
    <div className="w-full mt-4 flex flex-col">
      <NoItemFound message="You have no read or download books here at the moment." />
      {/* <LibraryBookList
        seeMoreHref="/books?catalog=classic"
        title="Reading Books"
      />
      <LibraryBookList
        seeMoreHref="/books?catalog=classic"
        title="Downloaded Books"
      /> */}
    </div>
  );
};

export default AllLibraryBooks;
