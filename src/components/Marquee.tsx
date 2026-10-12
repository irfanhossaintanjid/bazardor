
import type { Product, Unit } from "@/types";
import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const formatBangla = (value: number) => {
  return value.toLocaleString("bn-BD");
}
   const unitBn: Record<Unit, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };




const Marquee = async () => {
const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
 if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
const data: Product[] = await res.json()

    return (
        <MarqueeText direction="right" duration={12}>
          
       <div className="overflow-hidden whitespace-nowrap border py-[4px] border-gray-300 bg-[#fafcfa] ">
      {data.map((h) => (
        <Link href={`/product/${h.id}`} key={h.id} className="inline-flex gap-2 px-4 rounded-xl hover:bg-[#b8f8c5] border-green-500">
        <span>{h.image}</span>
          <span>{h.nameBn}</span>
          <span>{formatBangla(h.today)} টাকা/{unitBn[h.unit]}</span>
          <span
            className={
              h.change.dir === "up"
                ? "text-red-500"
                : "text-green-600"
            }
          >
            {h.change.dir === "up" ? "▲" : "▼"} {formatBangla(h.change.pct)}%
          </span>
        </Link>
      ))}
    </div>
    </MarqueeText>
    );
};

export default Marquee;