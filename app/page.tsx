"use client";
import { useEffect, useState } from "react";
import GraphCarousal from "./component/GraphCarousal";
import ScatterPlot from "./component/ScatterPlot";
import ScoreCards from "./component/ScoreCards";

export default function Home() {
  const [excelData, setExcelData] = useState<any[]>([]);
  const [currentData, setCurrentData] = useState<any>({});

  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const response = await fetch("/data/team-data.json"); // Update this path
        const data = await response.json();
        setExcelData(data.datasets);
      } catch (error) {
        console.error("Error fetching the dataset:", error);
      }
    };

    fetchExcelData();
  }, []);

  const uniqueNames =
    excelData.length > 0
      ? excelData.map((dataset: { Name: any }) => dataset.Name)
      : [];

  const updateCurrentData = (data: any) => {
    setCurrentData(data);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center pt-2 pb-4 px-10">
      <div className="grid grid-cols-12 gap-8 w-full h-full">
        <div className="col-span-8 h-full">
          <ScatterPlot excelData={excelData} onUpdate={updateCurrentData} />
        </div>
        <div className="col-span-4 h-full flex flex-col">
          <ScoreCards teams={currentData.teams} />
        </div>
      </div>

      {uniqueNames && <GraphCarousal uniqueNames={uniqueNames} />}
    </div>
  );
}
