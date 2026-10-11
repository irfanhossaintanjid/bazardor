
import type { Product } from "@/types";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const formatBangla = (value: number) => {
  return value.toLocaleString("bn-BD");
};

const Marquee = async () => {
const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
 if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
const data: Product[] = await res.json()

    return (
        <MarqueeText direction="right" duration={8}>
       <div className="overflow-hidden whitespace-nowrap border py-[4px] border-gray-300 bg-[#fafcfa] ">
      {data.map((h) => (
        <span key={h.id} className="inline-flex gap-2 px-4">
        <span>{h.image}</span>
          <span>{h.nameBn}</span>
          <span>{formatBangla(h.today)} টাকা/{h.unit}</span>
          <span
            className={
              h.change.dir === "up"
                ? "text-red-500"
                : "text-green-600"
            }
          >
            {h.change.dir === "up" ? "▲" : "▼"} {formatBangla(h.change.pct)}%
          </span>
        </span>
      ))}
    </div>
    </MarqueeText>
    );
};

export default Marquee;