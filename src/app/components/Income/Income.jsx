import BarChartIncome from "@/app/Utils/barChartIncome";
import { FinancialBox } from "../FinancialBox/FinancialBox";
import styles from "./Income.module.css";

export function Income() {
  return (
    <div className={styles.income}>
      <FinancialBox>
        <h2 className={styles.incomeText}>Monthly Income</h2>
        <br />
        <h3 className={styles.incomeValue}>
          Job <b>+ $4500</b>
        </h3>
        <h3 className={styles.incomeValue}>
          Ew <b>+ $8300</b>
        </h3>
        <h3 className={styles.incomeValue}>
          Rf <b>+ $400</b>
        </h3>
        <br />
        <BarChartIncome />
      </FinancialBox>
    </div>
  );
}
