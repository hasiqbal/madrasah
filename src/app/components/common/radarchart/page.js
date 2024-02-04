"use client";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2"; // Import Radar instead of PolarArea

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const RadarChart = ({ role, color }) => {
  return (
    <div className="w-full  ">
      <div className="my-2 flex items-center justify-between">
        <div className="text-medium border border-gray-300 p-2 px-4 rounded-full font-light text-gray-500 mx-2">
          {role}
        </div>
      </div>
      <Radar data={data} />
    </div>
  );
};

export default RadarChart;
