import Image from "next/image";
import USER from "../../../../public/user.png";
import styles from "./Nav.module.css";
import { NAVBARLIST } from "@/app/constants/navbarList";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Image src={USER} alt="userLogo" />
      <h1> Wiem </h1>
      <ul>
        {NAVBARLIST.map(({ listName, path }) => {
          return <li key={path}> {listName} </li>;
        })}
      </ul>
    </nav>
  );
}
