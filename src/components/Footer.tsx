
"use client";

import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 sm:flex-row sm:px-6 sm:py-7">
        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollToTop();
          }}
          aria-label="Riazul Islam - Back to home"
          className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0a]"
        >
          <Image
            src="/signature.png"
            alt="Riazul Islam"
            width={160}
            height={40}
            sizes="(max-width: 640px) 128px, 160px"
            className="h-auto w-32 object-contain sm:w-40"
          />
        </a>

        {/* Copyright and Back to Top */}
        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-5 md:gap-6">
          <p className="text-center text-xs leading-5 text-gray-400 sm:text-sm">
            © {new Date().getFullYear()} Riazul Islam. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-emerald-500/30 px-4 py-2.5 text-sm font-medium text-emerald-400 transition-colors duration-300 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0a0a] motion-reduce:transition-none"
            aria-label="Scroll back to top"
          >
            Back to Top
            <FaArrowUp
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
