import styles from "./Notes.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";

export function Notes() {
  return (
    <div className={styles.notes}>
      <FinancialBox>
        <div className={styles.addNote}>
          <h3>Notes</h3>
          <button>ADD NOTE</button>
        </div>
        <hr />
      </FinancialBox>
    </div>
  );
}
