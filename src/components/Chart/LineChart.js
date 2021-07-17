import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  const expenses = props.items;

  const createLabels = expenses.map((expense) =>
    new Date(expense.date).getDate()
  );

  const createData = expenses.map((expense) => parseInt(expense.amount));

  // Create data for line graph
  // sum amount each day
  // return sum array

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "rgba(16, 156, 241, 0.75)");
    gradient.addColorStop(0.5, "rgba(16, 156, 241, 0.5)");
    gradient.addColorStop(0.75, "rgba(16, 156, 241, 0.25)");
    gradient.addColorStop(1, "rgba(12, 156, 241, 0)");

    return {
      labels: createLabels,
      datasets: [
        {
          label: "Sum",
          data: createData,
          fill: true,
          backgroundColor: gradient,
          borderColor: "#108CF1",
          tension: 0.5,
          pointRadius: 0,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [10, 10],
          color: "#D3D8DD",
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50,
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} height={180} options={options} />
    </div>
  );
};

export default LineChart;
