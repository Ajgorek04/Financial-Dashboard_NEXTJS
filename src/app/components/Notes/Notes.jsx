import styles from "./Notes.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";

export function Notes() {
  return (
    <div className={styles.notes}>
      <FinancialBox>
        <h3>Notes</h3>
      </FinancialBox>
    </div>
  );
}
