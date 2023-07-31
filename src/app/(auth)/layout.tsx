import { getCurrentSession } from "@/utils";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = async (props: Props) => {
  const { children } = props;
  const session = await getCurrentSession();
  if (!session) {
    return <>{children}</>;
  }
  redirect("/");
};

export default layout;
