"use client";
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import Link from "next/link";

const SlideBar: React.FC = () => {
  const [select, setSelect] = useState<
    "Home" | "Chart" | "Upload" | "Settings"
  >("Home");

  return (
    <div className="bg-[#192230] w-[100px] h-screen p-4">
      <h1 className="text-white text-lg">The Sustainity</h1>
      <div className="flex h-full flex-col items-center justify-center gap-20">
        <Link href="/Home">
          <div
            onClick={() => setSelect("Home")}
            className="flex gap-8 items-center p-4"
          >
            {select === "Home" ? (
              <div className="w-[4px] h-[46px] bg-[#ffcd00]"></div>
            ) : (
              <div></div>
            )}
            <IoHome className="text-[#ffcd00] text-3xl" />
          </div>
        </Link>

        <div
          onClick={() => setSelect("Chart")}
          className="flex gap-8 items-center p-4"
        >
          {select === "Chart" ? (
            <div className="w-[4px] h-[46px] bg-[#ffcd00]"></div>
          ) : (
            <div></div>
          )}
          <FaChartPie className="text-[#ffcd00] text-3xl" />
        </div>
        <Link href="/DataTable">
          {" "}
          <div
            onClick={() => setSelect("Upload")}
            className="flex gap-8 items-center p-4"
          >
            {select === "Upload" ? (
              <div className="w-[4px] h-[46px] bg-[#ffcd00]"></div>
            ) : (
              <div></div>
            )}
            <MdDriveFolderUpload className="text-[#ffcd00] text-3xl" />
          </div>
        </Link>

        <div
          onClick={() => setSelect("Settings")}
          className="flex gap-8 items-center p-4"
        >
          {select === "Settings" ? (
            <div className="w-[4px] h-[46px] bg-[#ffcd00]"></div>
          ) : (
            <div></div>
          )}
          <IoSettings className="text-[#ffcd00] text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
