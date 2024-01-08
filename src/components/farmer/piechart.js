import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    datasets: [
      {
        label: "Products Sold",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
          "#FDBB30",
          "#FF5733",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
          "#B28900",
          "#C41E3A",
        ],
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {};

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
