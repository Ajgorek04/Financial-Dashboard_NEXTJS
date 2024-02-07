import Image from "next/image";
import styles from "./Header.module.css";
import BARS from "../../../../public/Hamburger.svg";
import { Button } from "../Button/Button";

export function Header({ toggleNavVisibility }) {
  return (
    <header className={styles.header}>
      <Image
        src={BARS}
        className={styles.turnOnNav}
        onClick={toggleNavVisibility}
        alt="bars"
      />

      <h2 className={styles.headerTitle}>FINANCIAL DASHBOARD</h2>
    </header>
  );
}
