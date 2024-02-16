import styles from "./ProfilePage.module.css";
import USER from "../../../../public/user.png";
import Image from "next/image";
import { USERINFO } from "@/app/constants/user";
import { EXAMPLES } from "@/app/constants/examples";

export function ProfilePage() {
  const netWorth = EXAMPLES.find(
    (networth) => networth.listName === "NetWorth"
  );

  return (
    <main className={styles.profilePage}>
      <div className={styles.profile}>
        <Image src={USER} alt="userLogo" />
        <h1>Name: {USERINFO.name}</h1>
        <p>Age: {USERINFO.age}</p>
        <p>Gender: {USERINFO.gender}</p>
        <p>Registration date: {USERINFO.registrationDate}</p>
        <h2>Total NetWorth: {netWorth.value}</h2>
      </div>
    </main>
  );
}
