import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import BnDate from "./BnDate";
import Navlinks from "./Navlinks";
import { Suspense } from "react";
import Userinfo from "./Userinfo";


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

     <Userinfo/>
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