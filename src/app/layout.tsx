import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";



const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "বাজার দর ",
  description: "বাজার দর-এ আপনার প্রয়োজনীয় পণ্য ও সেরা অফার খুঁজুন।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn"
    data-theme='light'
    className={`${notoSerifBengali.className} h-full antialiased`}>
      <body className="min-h-full bg-[#f5f8f6] text-slate-800">
    <Navbar/>
       <main className="max-w-6xl mx-auto bg-[#e1e8e1]">{children}</main>
        <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1a1a1a",
                color: "#fff",
                border: "1px solid #2a2a2a",
              },
            }}
          />

        </body>
    </html>
  );
}
