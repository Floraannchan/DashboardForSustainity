"use client";
import { IoHome } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
// import { MdDriveFolderUpload } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SlideBar: React.FC = () => {
  // const [select, setSelect] = useState<"Home" | "Chart" | "Settings">("Home");
  const pathname = usePathname();

  return (
    <div className="bg-[#192230] w-[100px] h-screen p-4">
      <h1 className="text-white text-lg">The Sustainity</h1>
      <div className="flex h-full flex-col items-center justify-center gap-20">
        {/* Home */}
        <Link
          href="http://localhost:3000"
          className="flex gap-8 items-center p-4"
        >
          {pathname === "http://localhost:3000" ? (
            <div className="w-[4px] h-[46px] bg-[#ffcd00]"></div>
          ) : null}
          <IoHome className="text-[#ffcd00] text-3xl" />
        </Link>

        {/* Chart */}
        <Link href="/Chart" className="flex gap-8 items-center p-4">
          {pathname === "/Chart" ? (
            <div className="w-[4px] h-[46px] bg-[#ffcd00]"></div>
          ) : null}
          <FaChartPie className="text-[#ffcd00] text-3xl" />
        </Link>

        {/* Setting */}
        <Link href="/Setting" className="flex gap-8 items-center p-4">
          {pathname === "/Setting" ? (
            <div className="w-[4px] h-[46px] bg-[#ffcd00]"></div>
          ) : null}
          <IoSettings className="text-[#ffcd00] text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default SlideBar;
