"use client";
import React from "react";
import UploadCsv from "../DataTable/page";
import { DataTable } from "@/components/ui/data_table";
import { Barchart } from "@/components/ui/LineChart";
import { Piechart } from "@/components/ui/Piechart";

// import { Linechart } from "@/components/ui/LineChart";

function Home() {
  return (
    <div className="h-screen p-8">
      <div className=" text-white mb-8">
        <div className="mb-4">
          <UploadCsv />
        </div>

        <DataTable />
      </div>
      <div>
        <Barchart />
      </div>
      <div>
        <Piechart />
      </div>
    </div>
  );
}

export default Home;
