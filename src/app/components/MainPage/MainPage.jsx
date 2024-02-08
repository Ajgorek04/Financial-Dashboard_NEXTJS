import { FinancialBox } from "../FinancialBox/FinancialBox";
import styles from "./MainPage.module.css";
import { Goal } from "../Goal/Goal";
import { Networth } from "../NetWorth/Networth";
import { Income } from "../Income/Income";
import { Assets } from "../Assets/Assets";
import { Spendings } from "../Spendings/Spendings";

export function MainPage() {
  return (
    <main className={styles.mainPage}>
      <div className={styles.topHome}>
        <Networth />
        <Goal />
      </div>
      <div className={styles.middleHome}>
        <Income />
        <Assets />
        <Spendings />
      </div>
    </main>
  );
}
