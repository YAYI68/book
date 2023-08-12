"use server";
import { headers } from "next/headers";

type BookInputType = {
  author: string;
  title: string;
  description: string;
  image: string | ArrayBuffer;
  genre: string;
  edition: string;
  note: string | ArrayBuffer;
};

export const createBook = async (data: BookInputType) => {
  const response = await fetch(`/api/book/`, {
    method: "POST",
    cache: "no-store",
    credentials: "include",
    headers: headers(),
    body: JSON.stringify({ ...data }),
  });
  return await response.json();
};
