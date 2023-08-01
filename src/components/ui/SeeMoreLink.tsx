import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  className?: string;
};

const SeeMoreLink = (props: Props) => {
  const { href, className } = props;
  return (
    <Link
      className={` ${className} hover:text-red-600 w-fit py-2 px-6 text-center rounded bg-red-500 text-white`}
      href={href}
    >
      See more
    </Link>
  );
};

export default SeeMoreLink;
