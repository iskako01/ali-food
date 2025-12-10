import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

import classes from "@/components/header.module.css";
export default function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="logo" />
        ALI FOOD
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
