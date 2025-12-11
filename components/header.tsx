import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import classes from "@/components/header.module.css";
import HeaderBackground from "@/components/header-background";

export default function Header() {
  return (
    <>
      <HeaderBackground />

      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo" priority />
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
    </>
  );
}
