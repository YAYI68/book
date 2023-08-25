import NoItem from "../../../public/svg/no_item.svg";
import Image from "next/image";
type Props = {
  message: string;
};

const NoItemFound = (props: Props) => {
  return (
    <div className="w-full min-h-[70vh] p-4 flex flex-col items-center">
      <div className="w-full h-[25vh] lg:h-[30vh]  lg:w-[70%]">
        <Image src={NoItem} alt="Result not Found" className="h-full w-full" />
      </div>
      <div>
        <p className="text-[1.5rem] text-center  dark:text-white  font-[500]">
          {props.message}
        </p>
      </div>
    </div>
  );
};

export default NoItemFound;
