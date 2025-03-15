import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Visitors",
        data: [1200, 1900, 1700, 2500, 2000, 3000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Website Visitors Over Time",
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Analytics Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Cards for Key Metrics */}
        <div className="bg-white p-4 shadow rounded text-center">
          <h2 className="text-lg font-semibold">Total Visitors</h2>
          <p className="text-2xl font-bold text-blue-600">15,000</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <h2 className="text-lg font-semibold">New Users</h2>
          <p className="text-2xl font-bold text-green-600">1,200</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl font-bold text-red-600">$8,750</p>
        </div>
      </div>
      {/* Line Chart */}
      <div className="bg-white p-4 shadow rounded">
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
