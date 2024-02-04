"use client";
"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, // Use BarElement for the bar chart
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2"; // Import Bar instead of Line

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, // Use BarElement for the bar chart
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const generateChartData = (color, shadowColor) => {
  const labels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const gradient = (ctx) => {
    const chart = ctx.chart;
    const { ctx: canvasContext, chartArea } = chart;
    if (!chartArea) {
      return null;
    }
    const gradient = canvasContext.createLinearGradient(
      chartArea.left,
      chartArea.top,
      chartArea.left,
      chartArea.bottom
    );
    gradient.addColorStop(0, shadowColor);
    gradient.addColorStop(0.8, "rgba(0, 0, 0, 0)");
    return gradient;
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Report",
        data: labels.map(() => Math.floor(Math.random() * 200 )),
        borderWidth: 1, // Change the border width for better visibility
        backgroundColor: gradient, // Use the custom gradient as the backgroundColor
      },
    ],
  };

  return data;
};

const BarChart = ({ role, color, shadowColor }) => {
  const data = generateChartData(color, shadowColor);

  return (
    <div className="w-full  ">
      <div className="my-2 flex items-center justify-between">
        <div className="text-medium border border-gray-300 p-2 px-4 rounded-full font-light text-gray-500 mx-2">
          {role}
        </div>
      </div>
      <Bar options={options} data={data} /> {/* Render the Bar component */}
    </div>
  );
};

export default BarChart;
