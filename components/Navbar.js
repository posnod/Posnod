"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const buttonText =
    pathname === "/about" ? "Tentang Posnod" : "Apa itu Posnod?";

  const navClass = pathname === "/" ? "fixed top-0 left-0 z-50" : "static";

  return (
    <div
      className={`w-full flex justify-center pt-20 bg-[#FBFBFB] pb-4 ${navClass}`}
    >
      <button
        onClick={() => router.push("/about")}
        className="flex items-center gap-3 px-2 py-2 rounded-full text-sm border border-gray-300 bg-white"
      >
        {/* Logo*/}
        <span
          onClick={(e) => {
            e.stopPropagation();
            router.push("/");
          }}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center py-2 
          bg-white transition hover:scale-110 hover:shadow-sm cursor-pointer"
        >
          <Image
            src="/images/butterfly.png"
            alt="Butterfly Icon"
            width={20}
            height={20}
          />
        </span>

        {/* Teks */}
        <span
          className="font-[14px] border border-gray-300 rounded-full px-6 py-2
          bg-white transition hover:scale-105 hover:shadow-sm cursor-pointer"
        >
          {buttonText}
        </span>
      </button>
    </div>
  );
}
