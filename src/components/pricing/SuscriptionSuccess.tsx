"use client";
import { useDataFetcher } from "@/hooks";
import { Loader } from "../shared";
import { CheckBadge } from "../ui/svg";
import Link from "next/link";

type Props = {
  reference: string;
};

const SuscriptionSuccess = (props: Props) => {
  const { reference } = props;
  console.log({ clientRef: reference });
  const { data: subscription, isLoading } = useDataFetcher({
    key: "/api/success",
    path: `success?reference=${reference}`,
  });

  if (isLoading) {
    return <Loader />;
  }
  console.log({ subscription });
  return (
    <section className=" w-full lg:p-8 flex flex-col items-center justify-center ">
      <div className="w-[80%] lg:w-[30%] shadow-lg flex flex-col items-center  p-4  dark:bg-slate-800 dark:text-white rounded-xl">
        <div id="check" className="w-full flex flex-col items-center gap-2">
          <div className="w-[5rem] h-[5rem] rounded-[50%]">
            <CheckBadge className=" text-green-600" />
          </div>
          <p className="text-center">
            You have successfully subscribed to our {subscription.plan} plan.
          </p>
        </div>
        <hr />
        <div className="w-full ">
          <h3 className="text-[1.2rem] font-medium text-center">
            Payment Details
          </h3>
          <p>You re currently on the {subscription.plan} plan</p>
          <p className="flex items-center justify-between">
            <span>Amount:</span> <span>{subscription.amount}</span>{" "}
          </p>
          <p className="flex items-center justify-between">
            <span>Currency:</span> <span>{subscription.currency}</span>{" "}
          </p>
          <p className="flex items-center justify-between">
            <span>Payment Method:</span> <span> {subscription.method}</span>
          </p>
          <p className="flex items-center justify-between">
            <span> Status:</span> <span> {subscription.status}</span>
          </p>
          <p className="flex items-center justify-between">
            <span>Customer Name:</span> <span>{subscription.customer}</span>{" "}
          </p>
          <p className="flex items-center justify-between">
            <span>Reference Code:</span> <span>{subscription.reference}</span>
          </p>
        </div>
        <Link
          href="/"
          className="w-full p-2 my-4 text-center bg-red-500 text-white "
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default SuscriptionSuccess;
