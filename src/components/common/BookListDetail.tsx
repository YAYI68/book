import React from "react";
import Book from "./Book";
import { SeeMoreLink } from "../ui";

type Props = {
  title: string;
  seeMoreHref?: string;
};

const BookListDetail = (props: Props) => {
  const { title, seeMoreHref } = props;
  return (
    <div className="bg-gray-200 w-full flex flex-col items-center py-[3rem] dark:bg-black">
      <div className="w-[90%] flex items-center md:items-center lg:items-start flex-col gap-4 ">
        <h3 className="font-semibold text-[1.5rem] dark:text-white ">
          {title}
        </h3>
        <div className="w-full md:h-[25rem] items-center  flex flex-col md:items-start md:justify-end">
          <div className="w-full dark:border dark:bg-black bg-white shadow-2xl flex flex-col md:gap-12 md:flex-row  md:h-[18rem] md:shadow-xl md:px-[2rem] md:pb-[2rem]">
            <div className="h-[20rem] md:h-[22rem] md:translate-y-[-6rem] bg-yellow-500 md:w-[30%]"></div>
            <div className=" md:w-[65%] p-4 gap-2 md:gap-0 flex flex-col justify-between pt-[2rem] h-full ">
              <div className="w-full">
                <h4 className="dark:text-white font-medium">
                  HISTORICAL CONCEPTS
                </h4>
                <small className="text-xs text-gray-400">
                  By Lawal Odumeji
                </small>
              </div>
              <p className="dark:text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                at iusto illo consequatur eum dolorem labore quibusdam
                cupiditate, enim eius itaque, consectetur quod corrupti. Aliquam
                cupiditate facere nostrum molestias debitis?
              </p>
              <button className="bg-red-500 w-fit text-white py-2 px-4">
                Read now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-0 items-center md:flex-row md:justify-between flex-wrap ">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
        {seeMoreHref ? (
          <SeeMoreLink className="md:self-end" href={seeMoreHref} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BookListDetail;
