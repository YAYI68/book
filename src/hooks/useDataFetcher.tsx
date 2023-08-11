"use client";
import { BASE_URL } from "@/config/env";
import React from "react";
import useSWR from "swr";

type Props = {
  path: string;
  key: string;
};

const useDataFetcher = (props: Props) => {
  const { key, path } = props;
  const fetcher = async () => {
    const response = await fetch(`/api/${path}`);
    if (!response.ok) {
      throw Error("error");
    }
    return response.json();
  };
  const content = useSWR(`${key}`, fetcher);
  return content;
};

export default useDataFetcher;
