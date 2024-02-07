import styles from "./Nav.module.css";
import { UserInfo } from "../UserInfo/UserInfo";
import { NavItems } from "../NavItems/NavItems";
import CLOSE from "../../../../public/Close.svg";
import Image from "next/image";
import { Button } from "../Button/Button";

export function Nav({ isNavVisible, toggleNavVisibility }) {
  return (
    <nav className={`${styles.nav} ${isNavVisible ? styles.active : ""}`}>
      <UserInfo />
      <NavItems />
      <Button>
        <Image
          src={CLOSE}
          alt="closenav"
          className={styles.close}
          onClick={toggleNavVisibility}
        />
      </Button>
    </nav>
  );
}
