
import type { Product, Unit } from "@/types";
import Link from "next/link";
// import Link from "next/link";

type Props = {
  product: Product;
};


const formatBangla = (value: number) =>
  value.toLocaleString("bn-BD");
 const unitBn: Record<Unit, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};
const ProductCard = ({ product }: Props) => {
  const isUp = product.change.dir === "up";

  return (
    <Link
  href={`/product/${product.id}`}
  
>

  
    
    <div className="rounded-xl border border-gray-100 bg-white p-3 transition hover:border-[#09c95c] hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f1f6ef] text-xl">
          {product.categoryIcon}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold text-gray-800">
            {product.nameBn}
          </h3>

          <p className="text-xs text-gray-400">
            প্রতি {unitBn[product.unit]}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs text-gray-500">
            আজকের দাম
          </p>

          <p className="text-base font-extrabold text-gray-900">
            {formatBangla(product.today)} টাকা
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${
            isUp
              ? "bg-red-50 text-red-600"
              : "bg-green-50 text-green-700"
          }`}
        >
          {isUp ? "▲" : "▼"}{" "}
          {formatBangla(product.change.pct)}%
        </span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
