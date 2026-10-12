import type { Product } from "@/types";
import ProductList from "./ProductList";

type Props = {
  category: string;
  categoryName: string;
  categoryIcon: string;
};

const CategoryPage = async ({
  category,
  categoryName,
  categoryIcon,
}: Props) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
          {categoryIcon}
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-900">
            {categoryName}
          </h1>
          <p className=" text-gray-600">
            <span className="font-bold text-gray-800">{products.length.toLocaleString("bn-BD")}</span> টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <ProductList products={products} />
    </section>
  );
};

export default CategoryPage;