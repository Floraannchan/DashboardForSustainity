// app/utils/columnDef.ts
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import React from "react";

export function getColumnDef(columnNames: string[]): ColumnDef<any>[] {
  return columnNames.map((col) => {
    if (col === "Brand") {
      return {
        accessorKey: col,
        header: ({ column }) => (
          <button
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center space-x-1 text-black"
          >
            <span>{col}</span>
            <ArrowUpDown className="h-4 w-4" />
          </button>
        ),
        enableSorting: true,
        sortingFn: "text",
      };
    }

    return {
      accessorKey: col,
      header: col,
      enableSorting: false,
    };
  });
}
