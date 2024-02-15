"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./barChart.module.css"; // Upewnij się, że moduł CSS jest dostępny

const BarChart = () => {
  const jobData = [
    { name: "Ew", value: 8305 },
    { name: "Rf", value: 400 },
    { name: "Job", value: 4500 },
  ];

  const data = {
    labels: jobData.map((job) => job.name),
    datasets: [
      {
        label: "Value",
        data: jobData.map((job) => job.value),
        backgroundColor: ["#0800ff", "#fc7303", "#1dbe98"],
        borderColor: ["#0800ff", "#fc7303", "#1dbe98"],
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

export default BarChart;
