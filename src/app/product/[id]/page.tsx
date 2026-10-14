
import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import type { Market, Product } from "@/types";



type ProductDetailsData = Product & {
  markets: Market[];
};

type Props = {
  params: Promise<{ id: string }>;
};

async function getProduct(
  id: string
): Promise<ProductDetailsData | null> {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const result = await res.json();
  const product = result.data ?? result;

  if (!product || !product.id) return null;

  return product as ProductDetailsData;
}

async function ProductContent({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm text-slate-500">
          হোম › {product.categoryNameBn} › {product.nameBn}
        </p>

        <ProductDetails product={product} />
      </div>
    </main>
  );
}

export default function ProductPage({ params }: Props) {
  return (
    <Suspense
     fallback={
  <div className=" skeleton mx-auto flex h-52 max-w-6xl items-center justify-center">
    <span className="loading loading-spinner w-16 text-[#05893e]" />
  </div>}
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
