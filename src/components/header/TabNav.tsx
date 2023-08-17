import Link from "next/link";
import React from "react";

type Props = {
  tab: string;
  onChange: (text: string) => void;
};

const TabNav = (props: Props) => {
  const { tab, onChange } = props;

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
            onClick={() => onChange("all")}
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
            onClick={() => onChange("saved")}
          >
            SavedBooks
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TabNav;
