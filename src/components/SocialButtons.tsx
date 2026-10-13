"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";



const SocialButtons = () => {


  const [isLoading, setIsLoading] = useState<"google" | "github" | null>(
    null
  );

  const handlesocial = async (provider: "google" | "github") => {
    if (isLoading) return;

    setIsLoading(provider);

  
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
  disabled={isLoading !== null}
  className="btn btn-sm rounded-lg border border-gray-300 py-4 px-2 bg-[#fafcfa] font-bold sm:btn-md disabled:opacity-60"
>
  {isLoading === "google" ? (
    <span className="loading loading-spinner loading-sm text-[#05893e]" />
  ) : (
    <FcGoogle className="h-5 w-5" />
  )}
  Google দিয়ে চালিয়ে যান
</button>

      
<button
  type="button"
  onClick={() => handlesocial("github")}
  disabled={isLoading !== null}
  className="btn btn-sm rounded-lg border border-gray-300 py-4 px-2 bg-[#fafcfa] font-bold sm:btn-md disabled:opacity-60"
>
  {isLoading === "github" ? (
    <span className="loading loading-spinner loading-sm text-[#05893e]" />
  ) : (
    <FaGithub className="h-5 w-5" />
  )}
  GitHub দিয়ে চালিয়ে যান
</button>

      </div>
    </>
  );
};

export default SocialButtons;