"use client";
import styles from "./doughnutChart.module.css";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Fintechs", "Crypto", "Cash"],

    datasets: [
      {
        data: [1200, 20000, 121252],
        backgroundColor: ["#fc7303", "#0800ff", "#03fc30"],
        hoverBackgroundColor: ["#fc7303", "#03fc30", "#0800ff"],
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
