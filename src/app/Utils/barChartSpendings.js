"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./barChart.module.css";

const BarChartSpendings = () => {
  const spendingsData = [
    { name: "Fuel", value: 1000 },
    { name: "Food", value: 500 },
    { name: "Parties", value: 250 },
    { name: "Gifts", value: 300 },
  ];

  const data = {
    labels: spendingsData.map((spendings) => spendings.name),
    datasets: [
      {
        label: "Value",
        data: spendingsData.map((spendings) => spendings.value),
        backgroundColor: ["#00b894", "#fdcb6e", "#fab1a0", "#0984e3"],
        borderColor: ["#00b894", "#fdcb6e", "#fab1a0", "#0984e3"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default BarChartSpendings;
