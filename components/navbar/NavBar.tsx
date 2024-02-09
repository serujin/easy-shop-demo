import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

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
            <li>
              <Link href={"#"}>
                <b>Products</b>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <b>Tools</b>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <b>Samples</b>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <b>Deals</b>
              </Link>
            </li>
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
          <li>
            <Link href={"#"}>
              <b>Login</b>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <b>Sign up</b>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
