import styles from "./Nav.module.css";
import { UserInfo } from "../UserInfo/UserInfo";
import { NavItems } from "../NavItems/NavItems";
import CLOSE from "../../../../public/Close.svg";
import Image from "next/image";

export function Nav({ isNavVisible, toggleNavVisibility }) {
  function toggleNav() {
    console.log("wiem");
  }

  return (
    <nav className={`${styles.nav} ${isNavVisible ? styles.active : ""}`}>
      <UserInfo />
      <NavItems />
      <Image
        src={CLOSE}
        alt="closenav"
        className={styles.close}
        onClick={toggleNavVisibility}
      />
    </nav>
  );
}
