import { useSavedBookStore } from "@/store";
import AllSavedBooks from "./AllSavedBooks";
import NewSavedBooks from "./NewSavedBooks";

type Props = {};

const SavedBooks = ({}) => {
  const { bookstatus } = useSavedBookStore();
  if (bookstatus === "all") {
    return <AllSavedBooks />;
  }
  if (bookstatus === "new") {
    return <NewSavedBooks />;
  }
};

export default SavedBooks;
