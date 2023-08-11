"use server ";
import { BookForm } from "@/components/form";
import { BASE_URL } from "@/config/env";
import { headers } from "next/headers";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <BookForm />
    </div>
  );
};

export default page;
