"use client";

import styles from "./Nav.module.css";
import { UserInfo } from "../UserInfo/UserInfo";
import { NavItems } from "../NavItems/NavItems";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <UserInfo />
      <NavItems />
    </nav>
  );
}
