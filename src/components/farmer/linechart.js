import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    datasets: [
      {
        label: "Product Rates",
        data: [10, 20, 15, 30, 25, 35, 40],
        borderColor: "blue", // Line color
        backgroundColor: "rgba(0, 0, 255, 0.2)", // Fill color
        pointBackgroundColor: "blue", // Point color
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
