import { FinancialBox } from "../FinancialBox/FinancialBox";
import styles from "./Income.module.css";

export function Income() {
  return (
    <div className={styles.income}>
      <FinancialBox>
        <h3 className={styles.incomeText}>Monthly Income</h3>
      </FinancialBox>
    </div>
  );
}
