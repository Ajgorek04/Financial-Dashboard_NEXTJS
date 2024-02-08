import { EXAMPLES } from "@/app/constants/examples";
import { FinancialBox } from "../FinancialBox/FinancialBox";
import styles from "./Goal.module.css";

export function Goal() {
  const progress = EXAMPLES.find((item) => item.listName === "Progress")?.value;

  return (
    <div className={styles.goal}>
      <FinancialBox>
        <h3>GOAL FOR THIS YEAR: </h3>
        <div className={styles.progressBar}>
          <p>{((progress / 100000) * 100).toFixed(2)}%</p>
          <progress value={progress} max="100000"></progress>
        </div>
      </FinancialBox>
    </div>
  );
}
