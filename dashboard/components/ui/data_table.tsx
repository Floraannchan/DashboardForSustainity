"use client";

import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectData, selectColumns } from "@/app/slice/DataSlice";
import {
  ColumnFiltersState,
  flexRender,
  SortingState,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { selectColumns, selectData } from "@/app/slice/DataSlice";
import { getColumnDef } from "@/app/DataTable/columns";

export function DataTable() {
  const data = useSelector(selectData);
  const columnNames = useSelector(selectColumns);
  const columns = getColumnDef(columnNames);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="rounded-md border p-4 text-white">
      <div className="flex justify-end py-6 ">
        <input
          placeholder="Filter VendorName"
          value={
            (table.getColumn("VendorName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("VendorName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-1 border-white p-2"
        />
      </div>
      <Table>
        <TableHeader className="bg-[#ffcd00]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-black">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center h-24">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
