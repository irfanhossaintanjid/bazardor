import { navlinks } from "@/types";
import NavCategory from "@/components/NavCategory";

const NavLinks = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const navs: navlinks[] = await res.json();

  return <NavCategory categories={navs} />;
};

export default NavLinks;