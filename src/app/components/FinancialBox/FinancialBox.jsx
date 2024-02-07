import styles from "./FinancialBox.module.css";

export function FinancialBox({ children }) {
  return <div className={styles.financialBox}>{children}</div>;
}
