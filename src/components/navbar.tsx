"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";

const categories = [
  { name: "চাল", icon: "🍚", slug: "chal" },
  { name: "ডাল", icon: "🫘", slug: "dal" },
  { name: "তেল", icon: "🫙", slug: "tel" },
  { name: "সবজি", icon: "🥬", slug: "sobji" },
  { name: "মাছ", icon: "🐟", slug: "mach" },
  { name: "মাংস", icon: "🍗", slug: "mangsho" },
  { name: "চিনি-লবণ", icon: "🧂", slug: "chini-lobon" },
  { name: "মসলা", icon: "🌶️", slug: "moshla" },
];

const Navbar = () => {
  const pathname = usePathname();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
 
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100">
      {/* Top row: logo + auth */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#05893e] text-white">
            <MdOutlineShoppingCart className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h1 className="text-base font-bold leading-tight">বাজার দর</h1>
            <p
              
              className="truncate text-[10px] text-base-content/60 sm:text-xs"
            >
                
              {date}
            </p>
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

      {/* Category row */}
      <nav className="border-t border-gray-300">
        <ul className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map(({ slug, name, icon }) => {
            const active = pathname === `/category/${slug}`;
            return (
              <li key={slug} className="shrink-0">
                <Link
                  href={`/category/${slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
                    active
                      ? "bg-[#05893e] text-white"
                      : "text-base-content/80 hover:bg-[#05893e]/10 hover:text-[#05893e]"
                  }`}
                >
                  <span>{icon}</span>
                  <span>{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;