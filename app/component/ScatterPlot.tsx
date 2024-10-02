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
              label: `${currentData.Name} - ${currentIteration}`,
              data: currentData.values[currentIteration],
              backgroundColor: "#77FCB2",
              pointRadius: 8,
            },
          ];
          setData({ datasets });
          setCurrentIndexName(currentData.Name);
          setCurrentIterationName(currentIteration);
          setCurrentQuarter(currentData.Quarter);
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
    }, 5000);

    return () => clearInterval(intervalId);
  }, [excelData]);

  const options: any = {
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
        min: 5,
        max: 10,
        title: {
          display: false,
          text: "Scores",
          color: "#ffffff",
        },
        ticks: {
          stepSize: 1,
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
  };

  return (
    <div className="w-full h-96 flex flex-col justify-between items-center">
      <div className="mb-8 w-full flex flex-col items-start">
        <motion.h1
          className="text-4xl mb-4"
          key={currentIndexName + currentQuarter}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {currentIndexName} {currentQuarter ? `(${currentQuarter})` : ""}
        </motion.h1>
        <p className="text-2xl text-[#5B5B64]">{currentIterationName}</p>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default ScatterPlot;
