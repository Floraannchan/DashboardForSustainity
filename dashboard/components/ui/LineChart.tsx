"use client";
import { selectData } from "@/app/slice/DataSlice";
import { useSelector } from "react-redux";
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

export function Barchart() {
  const data = useSelector(selectData);
  const sliceData = data.slice(0, 100);

  return (
    <div className="w-full h-[300px] md:h-[500px]">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={sliceData}>
          <XAxis
            dataKey="Volumne"
            label={{ value: "Volume (mL)", position: "insideBottom" }}
          />
          <YAxis
            dataKey="Price"
            label={{
              value: "Average Price ($)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Bar dataKey="Price" fill="#8884d8" name="Price Vs Volumne" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
