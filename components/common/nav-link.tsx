"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

interface PropsInterface {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: PropsInterface) {
  const path = usePathname();

  const className = path.startsWith(href)
    ? `${classes.link} ${classes.active}`
    : classes.link;

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
