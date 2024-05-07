"use client";

import { Link } from "next-view-transitions";
import { FC } from "react";

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  href: string;
}

export const NavbarButton: FC<IProps> = ({ children, href, ...props }) => {
  return (
    <Link {...props} href={href}>
      {children}
    </Link>
  );
};
