
"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default function EditProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!name.trim()) {
      toast.error("নাম লিখুন");
      return;
    }

    setIsSaving(true);

    try {
      const { error } = await authClient.updateUser({
        name: name.trim(),
        image: image.trim() || null,
      });

      if (error) {
        toast.error(error.message || "প্রোফাইল আপডেট করা যায়নি");
        return;
      }

      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSaving(false);
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-md text-[#05893e]" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p>প্রোফাইল এডিট করতে সাইন ইন করুন।</p>
        <Link href="/signin" className="btn bg-[#05893e] text-white">
          সাইন ইন
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 px-4 py-10">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#05893e] hover:underline"
        >
          <FiArrowLeft />
          হোম পেজে ফিরে যান
        </Link>

        <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
          <h1 className="text-2xl font-bold text-base-content">
            Edit Profile
          </h1>
          <p className="mt-2 text-sm text-base-content/60">
            আপনার প্রোফাইলের তথ্য পরিবর্তন করুন।
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text font-semibold">নাম</span>
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="আপনার নাম লিখুন"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email (read-only) */}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text font-semibold">ইমেইল</span>
              </label>

              <input
                id="email"
                type="email"
                value={user.email}
                readOnly
                className="input input-bordered w-full"
              />

              <p className="mt-1 text-xs text-base-content/60">
                এই ফর্ম থেকে ইমেইল পরিবর্তন করা যাবে না।
              </p>
            </div>

            {/* Profile image URL */}
            <div className="form-control">
              <label htmlFor="image" className="label">
                <span className="label-text font-semibold">
                  প্রোফাইল ছবির URL
                </span>
              </label>

              <input
                id="image"
                type="url"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full"
              />

              <p className="mt-1 text-xs text-base-content/60">
                ছবির সরাসরি URL দিন। ফাঁকা রাখলে ছবি সরানোর চেষ্টা করা হবে।
              </p>
            </div>

            {/* Image preview */}
            {image.trim() && (
              <div className="flex items-center gap-3">
                <img
                  src={image}
                  alt="Profile preview"
                  className="size-16 rounded-full border border-base-300 object-cover"
                />
                <span className="text-sm text-base-content/60">
                  Profile preview
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSaving}
              className="btn w-full border-0 bg-[#05893e] text-white hover:bg-[#047f39]"
            >
              {isSaving ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <FiSave size={18} />
              )}

              {isSaving ? "সংরক্ষণ হচ্ছে..." : "পরিবর্তন সংরক্ষণ করুন"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
