import styles from "./Assets.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";

export function Assets() {
  return (
    <div className={styles.assets}>
      <FinancialBox>Assets</FinancialBox>
    </div>
  );
}
