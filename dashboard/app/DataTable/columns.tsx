"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  Brand: string;
  Description: string;
  Price: number;
  Size: string;
  Volume: number;
  Classification: number;
  PurchasePrice: number;
  VendorNumber: number;
  VendorName: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "Brand",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Brand
        <ArrowUpDown className="ml-2 h-4 w-4 text-red-700" />
      </Button>
    ),
    enableSorting: true,
    sortingFn: "text",
  },
  {
    accessorKey: "Price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    enableSorting: true,
    sortingFn: "basic", // For numeric values, "basic" is fine
  },
  {
    accessorKey: "Size",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Size
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    enableSorting: true,
    sortingFn: "text",
  },
  {
    accessorKey: "Volume",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Volume
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    enableSorting: true,
    sortingFn: "basic",
  },
];
