import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import NavigationItem from "./NavigationItem";

const NAVIGATION_LIST_ITEMS = ["Products", "Tools", "Samples", "Deals"];
const NAVIGATION_USER_ITEMS = ["Log in", "Sign up"];

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <Link href={"/"}>
          <Image
            alt={""}
            className={styles.logoLeft}
            src={"/navBar/horse-logo.svg"}
            width={22}
            height={22}
          />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            {NAVIGATION_LIST_ITEMS.map((text, index) => (
              <NavigationItem key={index} text={text} />
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.navBarRight}>
        <Link href={"/"}>
          <Image
            alt={""}
            className={styles.logoRight}
            src={"/navBar/cart.svg"}
            width={20}
            height={20}
          />
        </Link>
        <ul className={styles.navigationList}>
          {NAVIGATION_USER_ITEMS.map((text, index) => (
            <NavigationItem key={index} text={text} />
          ))}
        </ul>
      </div>
    </div>
  );
}
