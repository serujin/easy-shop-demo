import React from "react";
import NavigationItem from "./navigation-item/NavigationItem";
import NavBarLogo from "./logo/NavBarLogo";
import styles from "./NavBar.module.css";

const NAVIGATION_LIST_ITEMS = ["Products", "Tools", "Samples", "Deals"];
const NAVIGATION_USER_ITEMS = ["Log in", "Sign up"];

const renderItems = (list: string[]) => (
  <ul className={styles.navigationList}>
    {list.map((text, index) => (
      <NavigationItem key={index} text={text} />
    ))}
  </ul>
);

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <NavBarLogo variant="horse" />
        <nav className={styles.navigation}>
          {renderItems(NAVIGATION_LIST_ITEMS)}
        </nav>
      </div>
      <div className={styles.navBarRight}>
        <NavBarLogo variant="cart" />
        {renderItems(NAVIGATION_USER_ITEMS)}
      </div>
    </div>
  );
}
