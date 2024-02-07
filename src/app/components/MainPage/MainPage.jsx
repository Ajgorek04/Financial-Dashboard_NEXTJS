import { FinancialBox } from "../FinancialBox/FinancialBox";
import { EXAMPLES } from "@/app/constants/examples";
import styles from "./MainPage.module.css";

export function MainPage() {
  const netWorth = EXAMPLES.find((item) => item.listName === "NetWorth")?.value;
  const progress = EXAMPLES.find((item) => item.listName === "Progress")?.value;

  return (
    <main className={styles.mainPage}>
      <div className={styles.topHome}>
        <div className={styles.netWorth}>
          <FinancialBox>
            <h2>TOTAL NET WORTH</h2>
            <br />
            <h3>{netWorth}</h3>
          </FinancialBox>
        </div>
        <div className={styles.goal}>
          <FinancialBox>
            <h2> GOAL </h2>
            <br />
            <label for="file">GOAL FOR THIS YEAR: </label>
            <div className={styles.progressBar}>
              <progress value={progress} max="100000"></progress>
              {((progress / 100000) * 100).toFixed(2)}%
            </div>
          </FinancialBox>
        </div>
      </div>
    </main>
  );
}
