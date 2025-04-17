import { Barchart } from "@/components/ui/LineChart";
import { Piechart } from "@/components/ui/Piechart";
import React from "react";

const Chart = () => {
  return (
    <div className="p-4">
      <h1 className="text-[#ffcd00] text-5xl mb-8">Visualization Data</h1>
      <div>
        <Barchart />
      </div>
      <div>
        <Piechart />
      </div>
    </div>
  );
};

export default Chart;
