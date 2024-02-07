import { FinancialBox } from "../FinancialBox/FinancialBox";
import { EXAMPLES } from "@/app/constants/examples";
import styles from "./MainPage.module.css";

export function MainPage() {
  const netWorth = EXAMPLES.find((item) => item.listName === "NetWorth")?.value;

  return (
    <main className={styles.mainPage}>
      <div className={styles.topHome}>
        <div className={styles.netWorth}>
          <FinancialBox>TOTAL NET WORTH: {netWorth} </FinancialBox>
        </div>
        <div className={styles.goal}>
          <FinancialBox>GOAL</FinancialBox>
        </div>
      </div>
    </main>
  );
}
