import styles from "./Spendings.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";

export function Spendings() {
  return (
    <div className={styles.spendings}>
      <FinancialBox>
        <h3 className={styles.spendingsText}>Monthly Spendings</h3>
      </FinancialBox>
    </div>
  );
}
