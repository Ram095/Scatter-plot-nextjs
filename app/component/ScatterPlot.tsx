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
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface ScatterPlotProps {
  excelData: any[];
  onUpdate: (data: any) => void;
}

const ScatterPlot: FC<ScatterPlotProps> = ({ excelData, onUpdate }) => {
  const [data, setData] = useState<any>({ datasets: [] });
  const [currentIndexName, setCurrentIndexName] = useState("");
  const [currentIterationName, setCurrentIterationName] = useState("");
  const [currentQuarter, setCurrentQuarter] = useState("");
  const [chartOptions, setChartOptions] = useState<any>({});

  useEffect(() => {
    if (excelData.length === 0) return;
    let index = 0;
    let currentSet = 0;
    let intervalId: NodeJS.Timeout = setInterval(() => {}, 10000);

    const updateData = () => {
      if (currentSet < excelData.length) {
        const currentData = excelData[currentSet];
        const iterationKeys = Object.keys(currentData.values);
        if (index < iterationKeys.length) {
          const currentIteration = iterationKeys[index];
          const datasets = [
            {
              label: `${currentData.name} - ${currentIteration}`,
              data: currentData.values[currentIteration],
              backgroundColor: "#77FCB2",
              pointRadius: 8,
            },
          ];
          setData({ datasets });
          setCurrentIndexName(currentData.name);
          setCurrentIterationName(currentIteration);
          setCurrentQuarter(currentData.quarter); // Update chart options based on the JSON properties

          setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                offset: true,
                type: "category",
                title: {
                  display: false,
                  text: "Teams",
                  color: "#ffffff",
                },
                ticks: {
                  color: "#ffffff",
                },
              },
              y: {
                offset: true,
                min: currentData.min,
                max: currentData.max,
                title: {
                  display: false,
                  text: "Scores",
                  color: "#ffffff",
                },
                ticks: {
                  stepSize: currentData.step,
                  color: "#ffffff",
                },
              },
            },
            animation: {
              duration: 1000,
              easing: "easeOutQuart",
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
          });

          onUpdate({
            teams: currentData.values[currentIteration],
            uniqueNames: currentData.uniqueNames,
          });

          index++;
        } else {
          index = 0;
          currentSet++;
        }
      } else {
        index = 0;
        currentSet = 0;
      }
    };

    updateData();
    intervalId = setInterval(() => {
      updateData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [excelData]);

  return (
    <div className="w-full h-[600px] flex flex-col justify-between items-center">
      <div className="mb-8 w-full flex flex-col items-start">
        <motion.h1
          className="text-4xl mb-4"
          key={currentIndexName + currentQuarter}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {currentIndexName}
          {currentQuarter ? `(${currentQuarter})` : ""}
        </motion.h1>
        <p className="text-2xl text-[#5B5B64]">{currentIterationName}</p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full">
          <Scatter data={data} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ScatterPlot;
