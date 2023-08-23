"use client";
import { useTabStore } from "@/store";
import React from "react";
import { AllLibraryBooks, SavedBooks } from "../profile/mylibrary";

type Props = {};

const UserLibraryPage = (props: Props) => {
  const { tab } = useTabStore();
  return (
    <>
      {tab === "all" ? (
        <AllLibraryBooks />
      ) : tab === "saved" ? (
        <SavedBooks />
      ) : (
        ""
      )}
    </>
  );
};

export default UserLibraryPage;
