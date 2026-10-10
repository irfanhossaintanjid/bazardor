"use client";

import Link from "next/link";
import { Suspense } from "react";

import { MdOutlineShoppingCart } from "react-icons/md";
import CurrentDate from "./CurrentDate";
import NavLinks from "./Navlinks";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100">
    
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#05893e] text-white">
            <MdOutlineShoppingCart className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h1 className="text-base font-bold leading-tight">বাজার দর</h1>
            <CurrentDate
              className="block truncate text-[10px] text-base-content/60 sm:text-xs"
              fallback="লোড হচ্ছে..."
            />
          </div>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/signin"
            className="btn btn-sm sm:btn-md rounded-lg border border-[#05893e] bg-transparent py-2 px-4 text-[#05893e] hover:bg-[#05893e]/30"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="btn btn-sm sm:btn-md rounded-lg border-0 bg-[#05893e] text-white py-2 px-4 hover:bg-[#047f39]"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

    
    <Suspense fallback={<div className="h-10" />}>
      <NavLinks />
    </Suspense>
    {/* <Marqiuee></Marqiuee> */}
    </header>
  );
};

export default Navbar;