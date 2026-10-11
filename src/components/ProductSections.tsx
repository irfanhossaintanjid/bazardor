
import type { Product } from "@/types";
import ProductCard from "@/components/ProductCard";

const ProductSection = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  const increas = products.filter(
    (p) => p.change.dir === "up"
  );

  const decreas = products.filter(
    (p) => p.change.dir === "down"
  );

  return (
    <section className=" space-y-8 px-4 py-6">
      
      <div>
        <h2 className="mb-3 text-base font-extrabold text-gray-900">
          <span className="mr-2 text-red-500">▲</span>
          আজ দাম বেড়েছে
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 ">
          {increas.map((product) => (
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
          {decreas.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      
      <div id="products">
        <h2 className="mb-1 text-base font-extrabold text-gray-900">
          সব পণ্য
        </h2>

        <p className="mb-3 text-xs text-gray-500">
          নিত্যপ্রয়োজনীয় পণ্যের বর্তমান বাজারদর
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
