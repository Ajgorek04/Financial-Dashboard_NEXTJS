import { FinancialBox } from "../FinancialBox/FinancialBox";
import styles from "./Income.module.css";

export function Income() {
  return (
    <div className={styles.income}>
      <FinancialBox>Income</FinancialBox>
    </div>
  );
}
