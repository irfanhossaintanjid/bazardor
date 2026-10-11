
import Image from "next/image";

import BnDate from "./BnDate";

const Hero = () => {
  return (
    <section className="mx-auto mt-3 max-w-7xl px-4">
      <div className="grid grid-cols-1 md:flex min-h-[218px] items-center justify-between gap-6 overflow-hidden rounded-[20px] border border-[#e2ebe4] bg-[#f9fcf9] px-6 py-5 sm:px-8">
        {/* Hero Content */}
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-[#c9f5d7] px-3 py-1 text-xs font-semibold text-[#07843c]">
            <BnDate/>
          </span>

          <h1 className="mt-2 text-2xl font-extrabold leading-tight text-[#17251c] sm:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#products"
            className=" btn mt-5 inline-flex min-h-10 items-center justify-center rounded-lg border  px-5 py-2 text-sm font-bold transition bg-[#07843c] text-white"
          >
            বাজারদর দেখুন
          </a>
        </div>

    
        <div className=" w-70 shrink-0 items-center justify-center ">
          <Image
            src="/bazar-hero.png"
            alt="শাকসবজি ও ফলের ঝুড়ি"
            width={200}
            height={200}
            priority
            className="h-auto max-h-[300px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
