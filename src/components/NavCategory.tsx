
"use client";

import { navlinks } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  categories: navlinks[];
};

const NavCategory = ({ categories }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="border-t border-gray-300">
      <ul className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map(({ id, slug, nameBn, icon }) => {
          const active = pathname === `/category/${slug}`;

          return (
            <li key={id} className="shrink-0">
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
                <span>{nameBn}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavCategory;
