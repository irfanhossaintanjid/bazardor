"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { navlinks } from "@/types";

const NavCategory = ({ categories }: { categories: navlinks[] }) => {
  const pathname = usePathname();

  return (
    <nav className="border-t border-base-300">
      <ul className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => {
          const active = pathname === `/category/${c.slug}`;
          return (
            <li key={c.id} className="shrink-0">
              <Link
                href={`/category/${c.slug}`}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-[#05893e] text-white"
                    : "text-base-content/80 hover:bg-[#05893e]/10 hover:text-[#05893e]"
                }`}
              >
                {c.icon && <span>{c.icon}</span>}
                <span>{c.nameBn}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavCategory;