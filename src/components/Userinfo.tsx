"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";

const Userinfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;


  
  if (isPending) {
    return (
      <div className="flex items-center">
        <span className="loading loading-spinner loading-sm text-[#05893e]" />
      </div>
    );
  }

  const handlesignout = async () => {
  try {
    await authClient.signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছে!");
  } catch (error) {
    toast.error( "সাইন আউট করা যায়নি!");
  }
};

  return (
    <div>
      {user ? (
        <div className="dropdown dropdown-bottom dropdown-end">
          {/* Profile button */}
          <button
            type="button"
            tabIndex={0}
            className="flex items-center gap-2 rounded-full p-1 transition hover:bg-[#b8f8c5]"
          >
            <div className="avatar">
              <div className="relative size-10 overflow-hidden rounded-full ring-2 ring-[#05893e] ring-offset-2">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-green-100 font-bold text-[#05893e]">
                    {user?.name}
                  </div>
                )}
              </div>
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-800">
                {user.name}
              </p>
            
            </div>

            <FiChevronDown className="hidden text-slate-500 sm:block" />
          </button>

          {/* Dropdown menu */}
          <ul
            tabIndex={-1}
            className="menu dropdown-content z-50 mt-3 w-60 rounded-xl border border-base-200 bg-base-100 p-2 shadow-xl"
          >
            <li className="menu-title">
              <span className="truncate">{user.name}</span>
              <span className="truncate text-xs font-normal">
                {user.email}
              </span>
            </li>

            <li>
              <Link
                href="/profile/edit"
                className="flex items-center gap-3"
              >
                <FiUser size={18} />
                আমার প্রোফাইল
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={handlesignout}
                className="flex items-center gap-3 text-error"
              >
                <FiLogOut size={18} />
                সাইন আউট
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/signin"
            className="btn btn-sm rounded-lg border border-[#05893e] bg-transparent px-3 font-semibold text-[#05893e] hover:bg-[#05893e]/10 sm:btn-md sm:px-4"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn btn-sm rounded-lg border-0 bg-[#05893e] px-3 font-semibold text-white hover:bg-[#047f39] sm:btn-md sm:px-4"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;