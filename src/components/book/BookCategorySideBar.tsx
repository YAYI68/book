import Link from "next/link";

type Props = {};

const BookCategorySideBar = (props: Props) => {
  return (
    <div className="hidden md:w-full md:flex md:flex-col md:gap-4">
      <p className="dark:text-white font-semibold text-[2rem] ">Category</p>
      <div className="w-full p-[2rem] text-xs rounded-md bg-gray-200 dark:bg-gray-900">
        <ul className="w-full ">
          <li className="w-full">
            <Link
              href="/books?category=programming"
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500  hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Programming
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/books?category=science"
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Science
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/books?category=comics"
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Comics
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/books?category=romance"
              className="w-full font-semibold px-4 py-2 block  dark:text-white dark:hover:text-red-500 hover:bg-red-200 hover:text-red-500 rounded-2xl"
            >
              Romance
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCategorySideBar;
