"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function LandingPage({ users = [] }) {
  const [email, setEmail] = useState("");

  const getInitials = (email) => {
    if (!email) return "?";
    const name = email.split("@")[0];
    return name
      .split(/[._]/)
      .map((part) => part[0]?.toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const canSubmit = isValidEmail(email);

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center justify-center 
pt-[70px] px-4 text-center md:pt-48 
mt-32 md:mt-0">
        <h1 className="text-[32px] md:text-[48px] mb-[44px] md:mb-8">
          The Living System
        </h1>

        <p className="text-[#6B6B6B] text-[14px] md:text-[18px] max-w-sm md:max-w-2xl">
          Rasakan cara baru untuk belajar, berkolaborasi, dan berkembang di satu
          tempat.
        </p>

        <p className="text-[#6B6B6B] text-[14px] md:text-[18px] max-w-sm md:max-w-xl mb-[44px] md:mb-8">
          Daftar untuk menjadi yang pertama mencoba Posnod.
        </p>

        <a
          href="#"
          className="text-[#4B3B72] text-[14px] md:text-[16px] mb-[70px] md:mb-10 block no-underline outline-none focus:underline"
        >
          Dapatkan Early Access
        </a>

        {/* FORM EMAIL */}
        <div
          className="max-w-sm md:max-w-2xl w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-normal gap-3 md:gap-4 mt-6 md:mt-8"
        >
          {/* INPUT EMAIL */}
          <div
            className="bg-[#4B3B72]/5 rounded-full pl-6 pr-2 py-2 flex items-center w-full md:w-auto justify-center md:justify-start"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none bg-transparent text-left flex-1 text-xs md:text-sm min-w-[200px] md:min-w-[250px]"
            />

            <button
              disabled={!canSubmit}
              className={
                "w-8 h-8 md:w-9 md:h-9 rounded-full ml-2 md:ml-3 flex items-center justify-center transition-all " +
                (canSubmit
                  ? "bg-[#3f3066] text-white shadow-md hover:scale-110 hover:shadow-lg"
                  : "bg-[#4B3B72] text-white opacity-50 cursor-not-allowed")
              }
            >
              <Image
                src="/icons/Proced.svg"
                alt="Submit Icon"
                width={20}
                height={20}
                className="md:w-[24px] md:h-[24px]"
              />
            </button>
          </div>

          {/* AVATAR + TEXT */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-center md:text-left">
            {/* Avatar */}
            <div className="flex justify-center md:justify-start -space-x-2 md:-space-x-3">
              {users.slice(0, 2).map((user, i) => (
                <div
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border bg-gray-200 flex items-center justify-center text-[10px] md:text-sm font-semibold shadow-lg"
                >
                  {getInitials(user.email)}
                </div>
              ))}
            </div>

            {/* TEXT – MOBILE */}
            <p className="md:hidden text-[10px] text-[#6B6B6B] leading-4 text-center mt-1">
              Bergabunglah dengan komunitas pembelajar masa depan
            </p>

            {/* TEXT – DESKTOP */}
            <p className="hidden md:block text-sm text-[#6B6B6B] leading-5">
              Bergabunglah dengan komunitas <br /> pembelajar masa depan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
