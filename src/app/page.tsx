import { ArrowRight, BadgeCheck, Heart, MapPin, Search, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { Navbar } from "@/components/navbar";

const categories = [
  { name: "ফ্রেশ ফল", icon: "🍊", accent: "bg-orange-100 text-orange-600" },
  { name: "গৃহস্থালি", icon: "🏠", accent: "bg-emerald-100 text-emerald-600" },
  { name: "মেডিকেল", icon: "💊", accent: "bg-cyan-100 text-cyan-600" },
  { name: "ইলেকট্রনিক্স", icon: "📱", accent: "bg-violet-100 text-violet-600" },
  { name: "ফ্যাশন", icon: "👕", accent: "bg-pink-100 text-pink-600" },
  { name: "সুন্দরী", icon: "💄", accent: "bg-rose-100 text-rose-600" },
];

const trendingProducts = [
  { name: "গাছি ফ্রেশ আপেল", price: "৳ ১,৮৯০", oldPrice: "৳ ২,২০০", badge: "২০% ছাড়" },
  { name: "স্কিন কেয়ার বক্স", price: "৳ ৯৯০", oldPrice: "৳ ১,৪৫০", badge: "ছাড়ের অফার" },
  { name: "ওয়াশিং মেশিন", price: "৳ ২৮,৯৯০", oldPrice: "৳ ৩২,৯৯০", badge: "সেরা বিক্রয়" },
  { name: "স্মার্ট ওয়াচ", price: "৳ ৬,৯৯০", oldPrice: "৳ ৮,৪৯০", badge: "নতুন" },
];

const perks = [
  { icon: Truck, title: "ফ্রি ডেলিভারি", text: "৳ ১,০০০-এর উপরে অর্ডারে" },
  { icon: ShieldCheck, title: "১০০% নিরাপদ পেমেন্ট", text: "অবিচ্ছিন্ন অর্ডার সুরক্ষা" },
  { icon: Heart, title: "কাস্টমার সাপোর্ট", text: "২৪/৭ গ্রাহক সাহায্য" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-emerald-700 via-emerald-600 to-lime-500 px-6 py-8 text-white shadow-xl sm:px-10 lg:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                আজকের সেরা অফার
              </span>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                আপনার প্রয়োজনের সবকিছু <span className="text-lime-200">একসাথে</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-emerald-50 sm:text-lg">
                ফ্রেশ ফুড, ঝরঝরে ইলেকট্রনিক্স, হোমস্টোর, ফ্যাশন—সবকিছু এখন বাজার দর-এ, মাত্র এক ক্লিকে।
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50">
                  এখন কেনাকাটা করুন <ArrowRight size={18} />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/15">
                  <Search size={18} /> পণ্য খুঁজুন
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-4 text-sm text-emerald-50">
                <span className="inline-flex items-center gap-2"><BadgeCheck size={16} /> ১০০% রিয়েল প্রোডাক্ট</span>
                <span className="inline-flex items-center gap-2"><Truck size={16} /> ২৪-৪৮ ঘণ্টায় ডেলিভারি</span>
              </div>
            </div>

            <div className="rounded-[28px] bg-white/10 p-4 backdrop-blur-sm">
              <div className="rounded-[22px] bg-white p-4 text-slate-800 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">সাপ্তাহিক ডিল</p>
                    <h2 className="mt-2 text-2xl font-black">সুপার সেল</h2>
                  </div>
                  <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600">-৪০%</span>
                </div>

                <div className="mt-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-100 p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-slate-500">স্মার্ট হোম</p>
                      <p className="mt-2 text-3xl font-black text-emerald-700">৳ ১৬,৯৯০</p>
                    </div>
                    <div className="rounded-full bg-emerald-600 px-3 py-1 text-sm font-bold text-white">NEW</div>
                  </div>
                  <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>কালেকশন</span>
                      <span>বিক্রয় চালু</span>
                    </div>
                    <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-emerald-500 to-lime-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">ক্যাটাগরি</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900">চাহিদার উপর ভিত্তি করে</h2>
          </div>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700">
            সব দেখুন
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <button key={category.name} className="group rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${category.accent}`}>
                {category.icon}
              </div>
              <div className="text-lg font-bold text-slate-800">{category.name}</div>
              <div className="mt-2 text-sm text-slate-500 group-hover:text-emerald-600">অভিজ্ঞতা নিন</div>
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">ট্রেন্ডিং</p>
            <h2 className="mt-1 text-3xl font-black text-slate-900">সেরা পণ্য</h2>
          </div>
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700">
            আরও দেখুন
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trendingProducts.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative bg-gradient-to-br from-emerald-50 to-lime-100 p-4">
                <span className="absolute right-4 top-4 rounded-full bg-white px-2 py-1 text-xs font-bold text-emerald-700 shadow-sm">
                  {product.badge}
                </span>
                <div className="flex h-44 items-center justify-center rounded-2xl bg-white/60 text-6xl shadow-inner">
                  {product.name.includes("ফল") ? "🍏" : product.name.includes("স্কিন") ? "🧴" : product.name.includes("ওয়াশ") ? "🧺" : "⌚"}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>

                <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-black text-emerald-700">{product.price}</p>
                    <p className="text-sm text-slate-400 line-through">{product.oldPrice}</p>
                  </div>

                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-bold text-white transition hover:bg-emerald-700">
                    <ShoppingCart size={16} /> কার্ট
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-[32px] bg-slate-900 p-6 text-white lg:grid-cols-3 sm:p-8">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[30px] border border-emerald-100 bg-gradient-to-r from-emerald-50 to-lime-50 p-8 text-center sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-bold text-emerald-700 shadow-sm">
            <MapPin size={16} /> ঢাকা, চট্টগ্রাম, সিলেট
          </div>
          <h2 className="max-w-2xl text-3xl font-black text-slate-900 sm:text-4xl">
            আপনার শহরের সেরা বাজার এখন আপনার হাতে
          </h2>
          <p className="max-w-2xl text-slate-600">
            দ্রুত ডেলিভারি, বিশ্বস্ত বিক্রেতা, এবং সাশ্রয়ী মূল্য—সবকিছু এক জায়গায়।
          </p>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700">
            এখনই অর্ডার করুন <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
