import styles from "./Spendings.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";
import BarChartSpendings from "@/app/Utils/barChartSpendings";

export function Spendings() {
  return (
    <div className={styles.spendings}>
      <FinancialBox>
        <h2 className={styles.spendingsText}>Monthly Spendings</h2>
        <br />
        <h3 className={styles.spendingsValue}>
          Fuel <b>- 1000$</b>
        </h3>
        <h3 className={styles.spendingsValue}>
          Food <b>- 500$</b>
        </h3>
        <h3 className={styles.spendingsValue}>
          Parties <b>- 250$</b>
        </h3>
        <h3 className={styles.spendingsValue}>
          Gifts <b>- 300$</b>
        </h3>
        <br />
        <BarChartSpendings />
      </FinancialBox>
    </div>
  );
}
