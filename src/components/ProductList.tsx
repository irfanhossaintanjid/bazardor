
"use client";

import { useState } from "react";
import type { Product } from "@/types";
import Sortbar from "./Sortbar";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  const [sortedProducts, setSortedProducts] = useState(products);

  return (
    <>
      <Sortbar
        products={products}
        onSort={setSortedProducts}
      />

      <p className="mb-3  text-gray-600">
        মোট {sortedProducts.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          
           <ProductCard
              key={product.id}
              product={product}
            />
          
        ))}
      </div>
    </>

  );
};

export default ProductList;
