"use client";

import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathname === path && styles["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
