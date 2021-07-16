import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgba(16, 156, 241, 0.75)");
    gradient.addColorStop(0.5, "rgba(16, 156, 241, 0.25)");
    gradient.addColorStop(1, "rgba(12, 156, 241, 0)");

    return {
      labels: ["1", "5", "9", "10", "11", "12", "13"],
      datasets: [
        {
          label: "Sum",
          data: [90, 15, 150, 45, 32, 30, 170],
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
    responsive: true,
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
