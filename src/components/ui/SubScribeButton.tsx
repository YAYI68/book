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

  const { user } = session.data;
  //   console.log({ user });
  //   const config = {
  //     reference: new Date().getTime().toString(),
  //     email: user.email,
  //     plan: code,
  //     amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  //     publicKey: "pk_test_3ed7db366f045a0f95b48fb545a11a0c7f1b5456",
  //   };
  //   const initializePayment = usePaystackPayment(config);
  //   const onSuccess = (reference) => {
  //     // Implementation for whatever you want to do with reference and after success call.
  //     console.log({ reference });
  //     alert("Thanks for doing business with us! Come back soon!!");
  //   };
  //   const onClose = () => {
  //     // implementation for  whatever you want to do when the Paystack dialog closed.
  //     console.log("closed");
  //     alert("Wait! You need this oil, don't go!!!!");
  //   };

  const Subscribe = async () => {
    const { data: resData } = await axios.post("/api/payment", {
      email: user.email,
      amount,
      code,
    });
    const { data } = resData;
    if (data) {
      router.push(`${data.authorization_url}`);
      console.log({ data });
      console.log(data.authorization_url);
      //   window.location.href = data.authorization_url;
    }

    // console.log({ data });
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
