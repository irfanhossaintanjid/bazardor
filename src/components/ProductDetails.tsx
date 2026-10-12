
import Link from "next/link";
import type { Market, Product, Unit } from "@/types";

const unitBn: Record<Unit, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

type Props = {
  product: Product & {
    markets: Market[];
  };
};

function taka(price: number) {
  return `${price.toLocaleString("bn-BD")} টাকা`;
}

export default function ProductDetails({ product }: Props) {
  const isUp = product.change.dir === "up";
  const markets = product.markets ?? [];

  const lowestPrice = markets.length
    ? Math.min(...markets.map((market) => market.min))
    : 0;

  const highestPrice = markets.length
    ? Math.max(...markets.map((market) => market.max))
    : 0;

  const averagePrice = markets.length
    ? Math.round(
        markets.reduce(
          (total, market) => total + (market.min + market.max) / 2,
          0,
        ) / markets.length,
      )
    : 0;

  return (
    <>
      
      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-3xl">
              {product.image }
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {product.nameBn}
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                প্রতি {unitBn[product.unit]} • {product.nameBn}
              </p>

              <p
                className={`mt-2 text-sm font-medium `}
              >
                {isUp
                  ? `গতকালের তুলনায় আজ দাম বেড়েছে ${taka(
                      product.today - product.yesterday,
                    )}`
                  : `গতকালের তুলনায় আজ দাম কমেছে ${taka(
                      product.yesterday - product.today,
                    )}`}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-green-50 px-6 py-4 sm:min-w-40">
            <p className="text-sm text-slate-600">আজকের বাজারদর</p>

            <p className="mt-1 text-3xl font-bold text-green-800">
              {taka(product.today)}
            </p>

            <p className="mt-1 text-sm text-slate-600">
              প্রতি {unitBn[product.unit]}
            </p>

            <p
              className={`mt-2 text-sm font-semibold ${
                isUp ? "text-red-600" : "text-green-700"
              }`}
            >
              {isUp ? "▲" : "▼"}{" "}
              {product.change.pct.toLocaleString("bn-BD")}%
              {isUp ? " দাম বেড়েছে" : " দাম কমেছে"}
            </p>
          </div>
        </div>
      </section>

    
      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="mb-4 text-lg font-bold text-slate-900">
          বাজারের দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <PriceCard
            title="সর্বনিম্ন দাম"
            price={lowestPrice}
            dis="সবচেয়ে কম দামের বাজারে"
            color="green"
          />
         <div className="text-red-600">
          <PriceCard 
            title="সর্বোচ্চ দাম"
            price={highestPrice}
           dis="সবচেয়ে বেশি দামের বাজার"
            color="red"
          />
          </div>

          <PriceCard
            title="গড় বাজারদর"
            price={averagePrice}
            dis="প্রতি কেজি এর হিসাব"
            color="green"
          />
        </div>
      </section>

      {/* Market prices */}
      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <p className="mb-4 mt-1 text-sm text-slate-500">
          বিভিন্ন বাজারের সর্বনিম্ন ও সর্বোচ্চ দামের তুলনা।
        </p>

        
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead className="bg-green-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left">বাজার</th>
                  <th className="px-4 py-3 text-left">বিভাগ</th>
                  <th className="px-4 py-3 text-right">সর্বনিম্ন</th>
                  <th className="px-4 py-3 text-right">সর্বোচ্চ</th>
                  <th className="px-4 py-3 text-right">গড়</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market) => (
                  <tr
                    key={`${market.market}-${market.division}`}
                    className="border-t border-slate-200 even:bg-slate-50 "
                  >
                    <td className="px-4 py-3 font-medium">
                      {market.market}
                    </td>

                    <td className="px-4 py-3 text-slate-600">
                      {market.division}
                    </td>

                    <td className="px-4 py-3 text-right">
                      {taka(market.min)}
                    </td>

                    <td className="px-4 py-3 text-right">
                      {taka(market.max)}
                    </td>

                    <td className="px-4 py-3 text-right font-semibold text-green-800">
                      {taka(
                        Math.round((market.min + market.max) / 2),
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        
      </section>

      <div className="mt-5">
        <Link
          href={`/category/${product.category}`}
          className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
        >
          ← {product.image} সব {product.nameBn}
        </Link>
      </div>
    </>
  );
}


function PriceCard({
  title,
  price,
  
  color = "green",
  dis,
}: {
  title: string;
  price: number;
  
  color?: "green" | "red" | "blue";
  dis:string;
}) {
  const colorClasses = {
    green: "text-green-700",
    red: "text-red-600",
    blue: "text-blue-700",

  };

  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-sm text-slate-500">{title}</p>

      <p className={`mt-2 text-2xl font-bold ${colorClasses[color]}`}>
        {taka(price)}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {dis}
      </p>
    </div>
  );
}
