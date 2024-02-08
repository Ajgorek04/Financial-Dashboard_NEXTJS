import styles from "./Spendings.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";

export function Spendings() {
  return (
    <div className={styles.spendings}>
      <FinancialBox>Spendings</FinancialBox>
    </div>
  );
}
