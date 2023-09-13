"use client";
import { useSession } from "next-auth/react";
import { ArrowRight } from "./svg";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
  amount: number;
  code: string;
};

const SubScribeButton = (props: Props) => {
  const { amount, code } = props;
  const session = useSession();
  const router = useRouter();

  const Subscribe = async () => {
    console.log({ session });
    if (!session.data) {
      router.push("/login");
    } else {
      const user = session?.data.user;
      const { data: resData } = await axios.post("/api/payment", {
        email: user.email,
        amount,
        code,
      });
      const { data } = resData;
      if (data) {
        router.push(`${data.authorization_url}`);
        console.log(data.authorization_url);
      }
    }
  };

  return (
    <button
      disabled={!code}
      //   onClick={() => {
      //     initializePayment(onSuccess, onClose);
      //   }}
      onClick={Subscribe}
      className="text-white bg-red-500 rounded p-2 w-full flex items-center justify-center gap-2 "
    >
      {" "}
      <span>
        Choose Plan
      </span> <ArrowRight classname="h-[1.5rem] w-[1.5rem] " /> <span></span>
    </button>
  );
};

export default SubScribeButton;
