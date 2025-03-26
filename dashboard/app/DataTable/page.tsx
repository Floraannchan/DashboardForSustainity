"use client";
import React from "react";
import Papa from "papaparse";
import { useDispatch } from "react-redux";
import { setCsvData } from "../slice/DataSlice";

const UploadCsv: React.FC = () => {
  const dispatch = useDispatch();

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (result.data.length === 0) return;
        dispatch(setCsvData({ data: result.data, fileName: file.name }));
      },
    });
  };

  return (
    <div className="w-full h-screen bg-gray-800 text-white">
      <input
        type="file"
        accept=".csv"
        onChange={handleUpload}
        className="p-2"
      />
    </div>
  );
};

export default UploadCsv;
