import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import BnDate from "./BnDate";
import Navlinks from "./Navlinks";
import { Suspense } from "react";


const Navbar = () => {
  return (
    <header className="bg-[#fafcfa] sticky top-0 z-50 w-full border-b border-base-300 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 py-2">
    
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#05893e] text-white sm:h-11 sm:w-11">
            <TiShoppingCart className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <h1 className="text-lg font-extrabold leading-tight text-[#1d271f] sm:text-2xl">
              বাজার দর
            </h1>
            <p className=" font-semibold truncate text-[10px] text-gray-600 sm:text-xs">
              <BnDate />
            </p>
          </div>
        </Link>


        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/signin"
            className="btn btn-sm sm:btn-md rounded-lg border  border-[#05893e] bg-transparent px-3 font-semibold text-[#05893e] hover:bg-[#05893e]/30 sm:px-4"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="btn btn-sm sm:btn-md rounded-lg border-0 bg-[#05893e] px-3 font-semibold text-white hover:bg-[#047f39] sm:px-4"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      <Suspense
    fallback={<div className="skeleton mx-auto my-2 h-8 w-full max-w-6xl" />}
  >
    <Navlinks />
  </Suspense>
 
  
    </header>
  );
};

export default Navbar;