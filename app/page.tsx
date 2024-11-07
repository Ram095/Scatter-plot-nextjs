"use client";
import { useEffect, useState } from "react";
import GraphCarousal from "./component/GraphCarousal";
import ScatterPlot from "./component/ScatterPlot";
import ScoreCards from "./component/ScoreCards";

export default function Home() {
  const [excelData, setExcelData] = useState<any[]>([]);
  const [currentData, setCurrentData] = useState<any>({});
  const [siteId, setSiteId] = useState("");
  const [driveId, setDriveId] = useState("");
  useEffect(() => {
    const fetchSiteDriveId = async () => {
      try {
        const res = await fetch("/api/get-site-drive-id");
        const data = await res.json();
        setSiteId(data.siteId);
        setDriveId(data.driveId);
      } catch (error) {
        console.error("Error fetching site or drive ID:", error);
      }
    };
    const fetchFile = async () => {
      if (siteId && driveId) {
        try {
          const res = await fetch(
            `/api/fetch-file?siteId=${siteId}&driveId=${driveId}`
          );
          if (!res.ok) {
            console.error("Failed to fetch file:", await res.text());
            return;
          }
          const data = await res.json();
          setExcelData(data.datasets);
        } catch (error) {
          console.error("Error fetching file:", error);
        }
      }
    };
    fetchSiteDriveId();
    fetchFile();
  }, [siteId, driveId]);
  const uniqueNames =
    excelData.length > 0
      ? excelData.map((dataset: { name: any }) => dataset.name)
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
