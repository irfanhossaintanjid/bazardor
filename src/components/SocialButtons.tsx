"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const SocialButtons = () => {
  const handlesocial = async (provider: "google" | "github") => {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
    if (error) toast.error(error.message || "লগইন করা যায়নি");
  };

  return (
    <>
      <div className="my-5 flex items-center gap-3 text-xs text-base-content/60">
        <span className="h-px flex-1 bg-base-300" />
        অথবা
        <span className="h-px flex-1 bg-base-300" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => handlesocial("google")}
          className="btn btn-sm sm:btn-md rounded-lg font-bold border border-base-300 bg-[#fafcfa]"
        >
          <FcGoogle className="h-5 w-5" /> google দিয়ে চালিয়ে যান
        </button>
        <button
          type="button"
          onClick={() => handlesocial("github")}
          className="btn btn-sm sm:btn-md rounded-lg font-bold border border-base-300 bg-[#fafcfa]"
        >
          <FaGithub className="h-5 w-5" /> github দিয়ে চালিয়ে যান
        </button>
      </div>
    </>
  );
};

export default SocialButtons;