
// import MarqueeText from "react-marquee-text";
// import "react-marquee-text/dist/styles.css";

// type Product = {
//   id: string | number;
//   nameBn: string;
//   price?: number | string;
//   unit?: string;
//   changePercent?: number;
// };

// const Marqiuee = async () => {
//   const res = await fetch(
//     "https://api.abcz.workers.dev/api/bazardor/products"
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   const data: Product[] = await res.json();

//   return (
//     <div className="overflow-hidden border-y border-gray-200 bg-white py-2">
//       <MarqueeText>
//         {data.map((product) => (
//           <span
//             key={product.id}
//             className="mx-4 inline-flex items-center gap-2 border-r border-gray-200 pr-4 text-xs"
//           >
//             <span>🛒</span>
//             <span className="font-semibold text-gray-800">
//               {product.nameBn}
//             </span>
//             {product.price !== undefined && (
//               <span className="text-gray-500">
//                 {product.price} টাকা
//                 {product.unit ? `/${product.unit}` : ""}
//               </span>
//             )}
//           </span>
//         ))}
//       </MarqueeText>
//     </div>
//   );
// };

// export default Marqiuee;
