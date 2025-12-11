import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import classes from "./header.module.css";
import HeaderBackground from "@/components/header/header-background";
import NavLink from "@/components/common/nav-link";

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
