import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TrafficChart = () => {
  const data = {
    labels: ["Direct", "Social", "Referral", "Organic"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#4361ee", "#4cc9f0", "#f72585", "#4895ef"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    cutout: "70%",
  };

  return (
    <div className="card">
      <div className="card-header bg-white">
        <h5 className="card-title mb-0">Traffic Sources</h5>
      </div>
      <div className="card-body">
        <div className="chart-container">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TrafficChart;
