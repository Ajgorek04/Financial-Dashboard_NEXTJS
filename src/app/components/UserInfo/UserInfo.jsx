import styles from "./UserInfo.module.css";
import Image from "next/image";
import USER from "../../../../public/user.png";

export function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <Image
        src={USER}
        alt="userLogo"
        className={styles.userInfoImg}
        priority
      />
      <h1> ADMIN </h1>
    </div>
  );
}
