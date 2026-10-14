"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/SocialButtons";



export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email"));
    const password = String(fd.get("password"));

    if (!email || !password) return toast.error("ইমেইল ও পাসওয়ার্ড দিন");

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) return toast.error(error.message || "ইমেইল বা পাসওয়ার্ড ভুল");

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push("/");
    
  };

   if (loading) {
    return (
       
  <div className=" skeleton mx-auto flex h-52 max-w-6xl items-center justify-center">
    <span className="loading loading-spinner w-16 text-[#05893e]" />
  </div>
    );
  }

  return (
    <main className="min-h-[calc(100vh-8rem)] bg-[#f0f5f0] px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-[#1d271f]">সাইন ইন করুন</h1>
        <p className="mt-1 text-center text-sm text-base-content/60">
          আপনার অ্যাকাউন্টে প্রবেশ করুন।
        </p>

        <div className="mt-6 rounded-2xl border border-base-300 bg-[#fafcfa] p-5 sm:p-6">
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">ইমেইল</label>
              <input id="email" name="email" type="email" autoComplete="email" className="input w-full rounded-lg border border-base-300 bg-[#fafcfa] focus:border-[#05893e] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium">পাসওয়ার্ড</label>
              <input id="password" name="password" type="password" autoComplete="current-password" className="input w-full rounded-lg border border-base-300 bg-[#fafcfa] focus:border-[#05893e] focus:outline-none" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-full rounded-lg border-0 bg-[#05893e] text-white hover:bg-[#047f39]"
            >
              {loading ? <span className="loading loading-spinner loading-sm" /> : "সাইন ইন করুন"}
            </button>
          </form>

          <SocialButtons />

          <p className="mt-5 text-center text-sm text-base-content/70">
            অ্যাকাউন্ট নেই?{" "}
            <Link href="/signup" className="font-medium text-[#05893e] hover:underline">
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        <Link href="/" className="mt-6 block text-center text-sm text-base-content/60 hover:text-[#05893e]">
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}