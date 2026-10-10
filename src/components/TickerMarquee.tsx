// "use client";

// import MarqueeText from "react-marquee-text";
// import "react-marquee-text/dist/styles.css";
// // import { bn, unitBn } from "@/lib/api";
// import type { Product } from "@/types";

// const TickerMarquee = ({ products }: { products: Product[] }) => (
//   <div className="mx-auto max-w-6xl px-4 py-3">
//     <div className="overflow-hidden rounded-xl border border-base-300 bg-white py-2.5">
//       <MarqueeText duration={60} direction="left" pauseOnHover startVisible>
//         {products.map((p) => {
//           const { dir, pct } = p.change;
//           const color =
//             dir === "up"
//               ? "text-green-600"
//               : dir === "down"
//               ? "text-red-500"
//               : "text-gray-400";
//           const icon = dir === "up" ? "▲" : dir === "down" ? "▼" : "—";

//           return (
//             <span
//               key={p.id}
//               className="mr-8 inline-flex items-center gap-2 whitespace-nowrap text-sm"
//             >
//               <span>{p.image}</span>
//               <span className="font-semibold text-[#1d271f]">{p.nameBn}</span>
//               <span className="text-base-content/70">
//                 {bn(p.today)} টাকা/{unitBn[p.unit]}
//               </span>
//               <span className={`font-medium ${color}`}>
//                 {icon} {bn(Math.abs(pct), 1)}%
//               </span>
//             </span>
//           );
//         })}
//       </MarqueeText>
//     </div>
//   </div>
// );

// export default TickerMarquee;