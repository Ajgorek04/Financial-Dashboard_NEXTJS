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
            <h2> NET WORTH</h2>
            <br />
            <h3>{netWorth}</h3>
          </FinancialBox>
        </div>
        <div className={styles.goal}>
          <FinancialBox>
            <label for="progress">
              <h3>GOAL FOR THIS YEAR: </h3>
            </label>
            <div className={styles.progressBar}>
              <p>{((progress / 100000) * 100).toFixed(2)}%</p>
              <progress id="progress" value={progress} max="100000"></progress>
            </div>
          </FinancialBox>
        </div>
      </div>
    </main>
  );
}
