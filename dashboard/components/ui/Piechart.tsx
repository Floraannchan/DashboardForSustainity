"use client";
import { selectData } from "@/app/slice/DataSlice";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

export function Piechart() {
  const data = useSelector(selectData);
  const sliceData = data.slice(0, 100);

  const purchasePriceData = sliceData
    .map((item) => ({
      name: item.Description,
      value: parseFloat(item.PurchasePrice) || 0,
    }))
    .sort((a, b) => b.value - a.value);

  const top10 = purchasePriceData.slice(0, 10);
  const othersTotal = purchasePriceData
    .slice(10)
    .reduce((sum, item) => sum + item.value, 0);

  const chartData = [
    ...top10,
    ...(othersTotal > 0 ? [{ name: "Others", value: othersTotal }] : []),
  ];

  // Color palette for the chart
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#a4de6c",
    "#d0ed57",
    "#ffc0cb",
    "#8dd1e1",
  ];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`$${value}`, "Purchase Price"]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
