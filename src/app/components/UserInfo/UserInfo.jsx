import styles from "./UserInfo.module.css";
import Image from "next/image";
import USER from "../../../../public/user.png";
import { USERINFO } from "@/app/constants/user";

export function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <Image
        src={USER}
        alt="userLogo"
        className={styles.userInfoImg}
        priority
      />
      <h1> {USERINFO.name} </h1>
    </div>
  );
}
