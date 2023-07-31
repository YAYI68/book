import { getCurrentSession } from "@/utils";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = async (props: Props) => {
  const session = await getCurrentSession();
  if (!session) {
    redirect("/login");
  } else {
    return <>{props.children}</>;
  }
};

export default layout;
