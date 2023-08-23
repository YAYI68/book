"use client";
import { useTabStore } from "@/store";
type Props = {};

const TabNav = (props: Props) => {
  const { tab, changeTab } = useTabStore();

  return (
    <div className="flex w-full flex-col items-center lg:items-start ">
      <ul className="w-[80%] flex items-center p-2 lg:w-[40%] justify-center gap-4">
        <li>
          <button
            className={`${
              tab === "all"
                ? "dark:text-white before:w-full"
                : "dark:text-gray-400"
            }  nav_link`}
            onClick={() => changeTab("all")}
          >
            AllBooks
          </button>
        </li>
        <li>
          <button
            className={`${
              tab === "saved"
                ? "dark:text-white before:w-full"
                : "dark:text-gray-400"
            }  nav_link`}
            onClick={() => changeTab("saved")}
          >
            SavedBooks
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TabNav;
