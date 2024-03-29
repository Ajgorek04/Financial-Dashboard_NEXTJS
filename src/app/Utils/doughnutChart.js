"use client";
import styles from "./doughnutChart.module.css";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { EXAMPLES } from "../constants/examples";

const DoughnutChart = () => {
  const FintechsValue = EXAMPLES.find(
    (item) => item.listName === "FINTECHS"
  )?.value;
  const CashValue = EXAMPLES.find((item) => item.listName === "CASH")?.value;
  const CryptoValue = EXAMPLES.find(
    (item) => item.listName === "CRYPTO"
  )?.value;

  const data = {
    labels: ["Fintechs", "Crypto", "Cash"],

    datasets: [
      {
        data: [FintechsValue, CryptoValue, CashValue],
        backgroundColor: ["#0800ff", "#fc7303", "#1dbe98"],
        hoverBackgroundColor: ["#0080ff", "#ffff00", "#106954"],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Ustawia legendę na dole
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
};

export default DoughnutChart;
