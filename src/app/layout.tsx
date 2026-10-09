import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "বাজার দর | অনলাইন বাজার",
  description: "বাজার দর-এ আপনার প্রয়োজনীয় পণ্য ও সেরা অফার খুঁজুন।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={`${notoSerifBengali.className} h-full antialiased`}>
      <body className="min-h-full bg-[#f5f8f6] text-slate-800">{children}</body>
    </html>
  );
}
