import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["1", "5", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Sum",
        data: [90, 15, 150, 45, 32, 30],
        fill: true,
        backgroundColor: "#108CF1",
        borderColor: "#108CF1",
        tension: 0.5,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} height={180} options={options} />
    </div>
  );
};

export default LineChart;
