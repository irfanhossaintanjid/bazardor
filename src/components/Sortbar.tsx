"use client";

import { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import type { Product } from "@/types";

type Props = {
  products: Product[];
  onSort: (products: Product[]) => void;
};

const Sortbar = ({ products, onSort }: Props) => {
  const [sortBy, setSortBy] = useState("default");

  const handleSort = (value: string) => {
    setSortBy(value);

    const sorted = [...products].sort((a, b) => {
      if (value === "low") return a.today - b.today;
      if (value === "high") return b.today - a.today;
      return 0;
    });

    onSort(sorted);
  };

  const labels: Record<string, string> = {
    default: "ডিফল্ট",
    low: "দাম: কম থেকে বেশি",
    high: "দাম: বেশি থেকে কম",
  };

  return (
    <div className="mb-3 flex justify-end items-center gap-2">
       <span className="text-gray-700 font-bold"> সাজান</span>
      <div className="dropdown dropdown-end md:dropdown-left">
        
        <button
          tabIndex={0}
          className="btn rounded-xl border border-gray-200 bg-white text-gray-700"
        >
          <LuChevronLeft className="rotate-270 md:rotate-0" />
          {labels[sortBy]}
        </button>

        <ul
          tabIndex={0}
          className="dropdown-content menu z-10 w-52 rounded-box bg-gray-200 p-2 text-gray-700 shadow"
        >
          <li>
            <button onClick={() => handleSort("default")}>
              ডিফল্ট
            </button>
          </li>
          <li>
            <button onClick={() => handleSort("low")}>
              দাম: কম থেকে বেশি
            </button>
          </li>
          <li>
            <button onClick={() => handleSort("high")}>
              দাম: বেশি থেকে কম
            </button>
          </li>
        </ul>
      </div>
    </div>

     

      
  );
};

export default Sortbar;