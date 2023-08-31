import { Spinner } from "../ui";

type Props = {};

const Loader = (props: Props) => {
  return (
    <main className="w-screen h-screen fixed bg-black top-0 left-0 backdrop-blur-[4px] flex items-center justify-center">
      <div className="">
        <Spinner className="w-[3rem] h-[3rem]" />
      </div>
    </main>
  );
};

export default Loader;
