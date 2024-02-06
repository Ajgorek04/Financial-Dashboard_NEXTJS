"use client";
import styles from "./NavItems.module.css";
import { NAVBARLIST } from "@/app/constants/navbarList";
import { usePathname } from "next/navigation";

export function NavItems() {
  const pathName = usePathname();

  return (
    <ul className={styles.navList}>
      {NAVBARLIST.map(({ path, listName }) => (
        <a
          href={path}
          key={path}
          className={pathName === path ? styles.activeNavList : ""}
        >
          <li>{listName}</li>
        </a>
      ))}
    </ul>
  );
}
