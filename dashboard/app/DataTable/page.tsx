"use client";
import React from "react";
import Papa from "papaparse";
import { useDispatch } from "react-redux";
import { setCsvData } from "@/app/slice/DataSlice";

const UploadCsv = () => {
  const dispatch = useDispatch();
  // const data = useSelector(selectData);
  // const col = useSelector(selectColumns);
  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        if (result.data.length === 0) return;

        dispatch(
          setCsvData({
            data: result.data,
            fileName: file.name,
            columns: Object.keys(result.data[0] || {}),
          })
        );
      },
    });
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={handleUpload}
        className="p-2 border border-white rounded-md"
      />
    </div>
  );
};

export default UploadCsv;
