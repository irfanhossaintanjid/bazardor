
"use client";

import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session?.user.name);
    }
  }, [session]);

  const handleUpdateProfile = async (
    e: React.SubmitEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const { error } = await authClient.updateUser({ name });

      if (error) {
        toast.error("নাম আপডেট করা যায়নি");
        return;
      }

      toast.success("নাম সফলভাবে আপডেট হয়েছে!");
    } catch {
      toast.error("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("সাইন আউট সফল হয়েছে");
  };

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <main className="min-h-screen  px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-900">
          আমার প্রোফাইল
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>

        {/* Profile information */}
        <section className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/70 p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="h-16 w-16 overflow-hidden rounded-2xl bg-gray-100">
                {session?.user?.image?  (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-green-100 font-bold text-[#05893e]">
                    {session?.user?.name}
                  </div>
                ) }
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">
                {session?.user?.name }
              </h2>

              <p className="text-sm text-gray-500">
                {session?.user?.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="btn btn-outline btn-error btn-sm"
          >
            <FiLogOut />
            সাইন আউট
          </button>
        </section>

        {/* Edit name only */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white/70 p-6 sm:p-8">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">
            তথ্য
          </h2>

          <form
            onSubmit={handleUpdateProfile}
            className="flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm"
              >
                নাম
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full bg-transparent"
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>

            <button type="submit" className="btn  bg-[#05893e] text-white w-full">
              Update Profile
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
