"use client";

import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 sm:flex-row">
        {/* Logo - Left */}
        <div className="flex items-center">
          <Image
            src="/signature.png"
            alt="Riazul Islam"
            width={160}
            height={40}
            className="h-auto w-40 object-contain"
          />
        </div>

        {/* Copyright and Back to Top - Right */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Riazul Islam. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-emerald-500/30 px-4 py-2 text-sm text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
            aria-label="Back to top"
          >
            Back to Top
            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}