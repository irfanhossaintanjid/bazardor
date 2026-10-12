
import type { Product } from "@/types";
import ProductCard from "@/components/ProductCard";

const ProductSection = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  const increas = products.filter(
    p => p.change.dir === "up"
  );
const increa = [...increas]
  .sort((a, b) => b.change.pct - a.change.pct)
  .slice(0, 6);
  const decreas = products.filter(
    (p) => p.change.dir === "down"
  );
  const decrea = [...decreas]
  .sort((a, b) => a.change.pct - b.change.pct  )
  .slice(0, 6);

 const bn = (n: number, digits = 0) =>
  n.toLocaleString("bn-BD", { maximumFractionDigits: digits });

  return (
    
    <section className=" space-y-8 px-4 py-6">
      
      <div>
        <h2 className="mb-3 text-base font-extrabold text-gray-900">
          <span className="mr-2 text-red-500">▲</span>
          আজ দাম বেড়েছে
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 ">
          {increa.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      
      <div>
        <h2 className="mb-3 text-base font-extrabold text-gray-900">
          <span className="mr-2 text-green-600">▼</span>
          আজ দাম কমেছে
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 ">
          {decrea.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      
      <div id="products" className="scroll-mt-20">
        <h2 className="mb-1 text-base font-extrabold text-gray-900">
          সব পণ্য
        </h2>

        <p className="mb-3 text-xs text-gray-500">
          মোট {bn(products.length)}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 ">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
