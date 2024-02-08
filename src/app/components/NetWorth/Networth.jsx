import { FinancialBox } from "../FinancialBox/FinancialBox";
import styles from "./Networth.module.css";
import { EXAMPLES } from "@/app/constants/examples";

export function Networth() {
  const netWorth = EXAMPLES.find((item) => item.listName === "NetWorth")?.value;

  return (
    <div className={styles.netWorth}>
      <FinancialBox>
        <h2> NET WORTH</h2>
        <br />
        <h3>{netWorth}</h3>
      </FinancialBox>
    </div>
  );
}
