
"use client";

import { useState } from "react";
import type { Product } from "@/types";
import Sortbar from "./Sortbar";

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
          <article
            key={product.id}
            className="rounded-xl border border-gray-200 bg-white p-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0f5f0] text-xl">
                {product.categoryIcon}
              </div>

              <div>
                <h2 className="font-bold text-gray-900">
                  {product.nameBn}
                </h2>
                <p className="text-xs text-gray-500">
                  প্রতি {product.unit}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-500">আজকের দাম</p>
                <p className="text-base font-extrabold text-gray-900">
                  {product.today.toLocaleString("bn-BD")} টাকা
                </p>
              </div>

              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  product.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change.dir === "down"
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 "
                }`}
              >
                {product.change.dir === "up"
                  ? "▲"
                  : product.change.dir === "down"
                    ? "▼"
                    : "—"}
                {product.change.pct.toLocaleString("bn-BD")}%
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductList;
