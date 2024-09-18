"use client";
import { FC, useState, useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ScatterPlot: FC = () => {
  const [data, setData] = useState({
    datasets: [
      {
        label: "Team Enthusiasm Index",
        data: [
          { x: "Calvi Aurora", y: 7 },
          { x: "Exact-FG", y: 8 },
          { x: "Brisker", y: 7.5 },
          { x: "SDWorx", y: 8.2 },
          { x: "PeakZi", y: 6.9 },
          { x: "AIMMS", y: 8.9 },
          { x: "Exact kalopsia", y: 7.5 },
          { x: "SDWorx Devops", y: 7.9 },
          { x: "Eneco Datahub", y: 8.1 },
          { x: "Exact Titans", y: 8.5 },
        ],
        backgroundColor: "rgba(0, 150, 136, 0.5)",
        pointRadius: 8,
      },
    ],
  });

  const updateData = () => {
    const newData = [
      { x: "Calvi Aurora", y: Math.random() * 5 + 5 },
      { x: "Exact-FG", y: Math.random() * 5 + 5 },
      { x: "Brisker", y: Math.random() * 5 + 5 },
      { x: "SDWorx", y: Math.random() * 5 + 5 },
      { x: "PeakZi", y: Math.random() * 5 + 5 },
      { x: "AIMMS", y: Math.random() * 5 + 5 },
      { x: "Exact kalopsia", y: Math.random() * 5 + 5 },
      { x: "SDWorx Devops", y: Math.random() * 5 + 5 },
      { x: "Eneco Datahub", y: Math.random() * 5 + 5 },
      { x: "Exact Titans", y: Math.random() * 5 + 5 },
    ];
    setData({
      datasets: [
        {
          label: "Team Enthusiasm Index",
          data: newData,
          backgroundColor: "rgba(0, 150, 136, 0.5)",
          pointRadius: 8,
        },
      ],
    });
  };

  useEffect(() => {
    let updateCount = 0;
    const interval = setInterval(() => {
      if (updateCount < 8) {
        updateData();
        updateCount += 1;
      } else {
        clearInterval(interval);
      }
    }, 1000); // Change interval as needed (e.g., every 1 second)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        offset: true,
        type: "category",
        labels: [
          "Calvi Aurora",
          "Exact-FG",
          "SDWorx Finland QA",
          "SDWorx Finland Dev",
          "Eneco Datahub",
          "Exact Titans",
          "Brisker",
          "PeakZi",
          "SDWorx Devops",
          "AIMMS",
          "Exact kalopsia",
        ],
        title: {
          display: true,
          color: "#ffffff",
        },
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        min: 5,
        max: 10,
        title: {
          display: true,
          color: "#ffffff",
        },
        ticks: {
          stepSize: 1,
          color: "#ffffff",
        },
      },
    },
    animation: {
      duration: 1000, // Animation duration in milliseconds
      easing: "easeOutQuart", // Easing function for the animation
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: { raw: { x: string; y: string } }) {
            const label = context.raw;
            return `Team: ${label.x}, Score: ${label.y}`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterPlot;
