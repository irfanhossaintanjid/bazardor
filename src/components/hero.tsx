import Link from "next/link";

const Basket = () => (
  <svg
    viewBox="0 0 260 200"
    className="h-auto w-full max-w-[240px]"
    role="img"
    aria-label="ফলের ঝুড়ি"
  >
    {/* shadow */}
    <ellipse cx="130" cy="178" rx="105" ry="14" fill="#e5e7e5" />

    {/* stems */}
    <path d="M118 62c2-14 10-20 18-22" stroke="#15803d" strokeWidth="5" fill="none" strokeLinecap="round" />
    <path d="M168 52c2-14 8-22 16-26" stroke="#15803d" strokeWidth="5" fill="none" strokeLinecap="round" />

    {/* fruits */}
    <circle cx="124" cy="92" r="40" fill="#ef4444" />
    <ellipse cx="168" cy="88" rx="36" ry="40" fill="#22c55e" />
    <circle cx="94" cy="108" r="16" fill="#a855f7" />
    <circle cx="150" cy="112" r="16" fill="#f97316" />
    <circle cx="196" cy="104" r="16" fill="#f59e0b" />

    {/* basket */}
    <path d="M42 118h176l-16 52c-1 4-5 7-9 7H67c-4 0-8-3-9-7z" fill="#b45309" />
    <rect x="38" y="112" width="184" height="16" rx="3" fill="#78350f" />
    <g stroke="#78350f" strokeWidth="4" strokeLinecap="round">
      <line x1="75" y1="132" x2="80" y2="170" />
      <line x1="105" y1="132" x2="108" y2="172" />
      <line x1="135" y1="132" x2="135" y2="172" />
      <line x1="165" y1="132" x2="162" y2="172" />
      <line x1="195" y1="132" x2="190" y2="170" />
    </g>
  </svg>
);

const Hero = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="flex flex-col-reverse items-center gap-6 rounded-3xl border border-base-300 bg-[#fafcfa] px-6 py-8 sm:px-10 md:flex-row md:justify-between">
        {/* Text */}
        <div className="w-full md:max-w-xl">
          <span
            suppressHydrationWarning
            className="inline-block rounded-full bg-[#05893e]/10 px-3 py-1 text-xs font-semibold text-[#05893e]"
          >
            {date}
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#1d271f] sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#1d271f]/70 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
            গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="#সব-পণ্য"
            className="btn btn-sm sm:btn-md mt-6 rounded-lg border border-[#05893e] bg-transparent text-[#05893e] hover:bg-[#05893e] hover:text-white"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        {/* Illustration */}
        <div className="flex w-full justify-center md:w-auto">
          <Basket />
        </div>
      </div>
    </section>
  );
};

export default Hero;