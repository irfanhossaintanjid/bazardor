
import NavCategory from './NavCategory';

export type navlinks = {
  id:string;
  slug: string;
  nameBn: string;
  icon: string;       
 
};
const Navlinks =async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

    const categories:navlinks[] = await res.json()
    
    return <NavCategory categories={categories} />;
};

export default Navlinks;