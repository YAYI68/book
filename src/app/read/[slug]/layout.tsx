import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const layout = async (props: Props) => {
  return <div className="">{props.children}</div>;
};
export default layout;
