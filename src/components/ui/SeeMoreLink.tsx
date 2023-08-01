import Link from "next/link";
import React from "react";

type Props = {
  href: string;
};

const SeeMoreLink = (props: Props) => {
  const { href } = props;
  return (
    <Link
      className="w-fit py-2 px-6 text-center rounded bg-red-500 text-white"
      href={href}
    >
      See more
    </Link>
  );
};

export default SeeMoreLink;
