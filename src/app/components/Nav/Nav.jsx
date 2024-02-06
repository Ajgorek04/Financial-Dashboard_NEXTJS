import styles from "./Nav.module.css";
import { UserInfo } from "../UserInfo/UserInfo";
import { NavItems } from "../NavItems/NavItems";
import CLOSE from "../../../../public/Close.svg";
import Image from "next/image";

export function Nav({ isNavVisible }) {
  return (
    <nav className={isNavVisible ? styles.nav : styles.hidden}>
      <UserInfo />
      <NavItems />
      <Image src={CLOSE} alt="closenav" className={styles.close} />
    </nav>
  );
}
