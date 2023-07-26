import { LoginForm } from "@/components/form";
import React from "react";
import LoginImg from "/public/images/login.webp";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "next-auth/react";

type Props = {};

const Page = async (props: Props) => {
  return (
    <section className="w-full flex h-screen">
      <div className="w-[50%] hidden lg:flex relative h-full ">
        <div className="absolute top-0 left-0 w-full h-ull bg-[rgba(0,0,0,.5)]">
          <div className="w-full h-screen flex flex-col items-center justify-center text-white">
            <div className="w-fit p-4 h-fit">
              <h3 className="text-[2.5rem] font-semibold">Start your</h3>
              <h3 className="text-[2.5rem] font-semibold">
                Reading Journey with us.
              </h3>
              <p className="text-[1.2rem] text-gray-300">
                We are always here to serve you better.
              </p>
            </div>
          </div>
        </div>
        <Image src={LoginImg} alt="" />
      </div>
      <div className="w-full lg:w-[50%] h-full bg-white dark:bg-black flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </section>
  );
};

export default Page;
