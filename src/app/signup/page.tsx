"use client";

import { useState } from "react";
import type {  SubmitEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/SocialButtons";


export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const image = String(formData.get("image"));
    const password = String(formData.get("password"));
    const confirm = String(formData.get("confirm"));

    if (!name) return toast.error("নাম লিখুন");
    if (!email) return toast.error("ইমেইল লিখুন");

    

    if (password.length < 8) {
      return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
    }
    if (password !== confirm) return toast.error("পাসওয়ার্ড মিলছে না");

    setLoading(true);
    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        toast.error("সাইন আপ ব্যর্থ হয়েছে");
        return;
      }

      toast.success("অ্যাকাউন্ট তৈরি হয়েছে! এবার সাইন ইন করুন");
      router.push("/signin");
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-8rem)] bg-[#f0f5f0] px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-[#1d271f]">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="mt-1 text-center text-sm text-base-content/60">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>

        <div className="mt-6 rounded-2xl border border-base-300 bg-[#fafcfa] p-5 sm:p-6">
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">নাম</label>
              <input id="name" name="name" type="text" autoComplete="name" className="input w-full rounded-lg border border-base-300 bg-[#fafcfa] focus:border-[#05893e] focus:outline-none" />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">ইমেইল</label>
              <input id="email" name="email" type="email" autoComplete="email" className="input w-full rounded-lg border border-base-300 bg-[#fafcfa] focus:border-[#05893e] focus:outline-none" />
            </div>

            <div>
              <label htmlFor="image" className="mb-1 block text-sm font-medium">
                ছবির URL <span className="text-xs font-normal text-base-content/60">(ঐচ্ছিক)</span>
              </label>
              <input
                id="image"
                name="image"
                type="url"
                placeholder="ছবির URL"
                className="input w-full rounded-lg border border-base-300 bg-[#fafcfa] focus:border-[#05893e] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium">পাসওয়ার্ড</label>
              <input id="password" name="password" type="password" autoComplete="new-password" className="input w-full rounded-lg border border-base-300 bg-[#fafcfa] focus:border-[#05893e] focus:outline-none" />
            </div>

            <div>
              <label htmlFor="confirm" className="mb-1 block text-sm font-medium">পাসওয়ার্ড নিশ্চিত করুন</label>
              <input id="confirm" name="confirm" type="password" autoComplete="new-password" className="input w-full rounded-lg border border-base-300 bg-[#fafcfa] focus:border-[#05893e] focus:outline-none" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-full rounded-lg border-0 bg-[#05893e] text-white hover:bg-[#047f39]"
            >
              {loading ? <span className="loading loading-spinner loading-sm" /> : "সাইন আপ করুন"}
            </button>
          </form>

          <SocialButtons />

          <p className="mt-5 text-center text-sm text-base-content/70">
            অ্যাকাউন্ট আছে?{"  "}
            <Link href="/signin" className="font-medium text-[#05893e] hover:underline">
              সাইন ইন করুন
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