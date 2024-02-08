import styles from "./Assets.module.css";
import { FinancialBox } from "../FinancialBox/FinancialBox";
import DoughnutChart from "@/app/Utils/doughnutChart";

export function Assets() {
  return (
    <div className={styles.assets}>
      <FinancialBox>
        <DoughnutChart />
      </FinancialBox>
    </div>
  );
}
