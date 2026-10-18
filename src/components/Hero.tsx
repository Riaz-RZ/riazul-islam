
"use client";

import Image from "next/image";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 md:min-h-[calc(100svh-76px)] md:grid-cols-2 md:gap-10 md:py-16 lg:gap-16 lg:px-8 lg:py-20"
    >
      {/* Profile portrait */}
      <div className="relative z-10 order-1 mx-auto w-full max-w-70 sm:max-w-sm md:order-2 md:max-w-none md:px-2 lg:px-4">
        {/* Ambient emerald glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-8 rounded-full bg-emerald-400/15 blur-[70px] sm:blur-[90px]"
        />

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-3 h-20 w-20 rounded-full border border-emerald-400/10 sm:-right-3 sm:-top-4 sm:h-28 sm:w-28 lg:-right-2 lg:h-32 lg:w-32"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-3 -left-2 h-24 w-24 rounded-full border border-emerald-400/10 sm:-bottom-4 sm:-left-3 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
        />

        {/* Portrait frame */}
        <div className="relative mx-auto aspect-4/5 w-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1b3440] via-[#111a29] to-[#080b12] shadow-2xl shadow-emerald-950/30 sm:rounded-3xl">
          <Image
            src="/my-portrait.png"
            alt="Portrait of Md Riazul Islam"
            fill
            priority
            sizes="(max-width: 639px) 280px, (max-width: 767px) 384px, (max-width: 1023px) 42vw, 440px"
            className="object-contain object-bottom p-2 transition-transform duration-700 hover:scale-[1.03] sm:p-3"
          />

          {/* Bottom gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-[#080b12]/70 to-transparent sm:h-32"
          />
        </div>

        {/* Floating name card */}
        <div className="absolute -bottom-4 left-0 z-20 max-w-[85%] rounded-xl border border-white/10 bg-[#101522]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:-bottom-5 sm:-left-4 sm:rounded-2xl sm:px-5 sm:py-4 md:-left-5 lg:-left-6">
          <p className="text-sm font-semibold text-white sm:text-base">
            Md Riazul Islam
          </p>
          <p className="mt-1 text-[11px] text-emerald-300 sm:text-xs">
            Full Stack Developer
          </p>
        </div>

        {/* Location card */}
        <div className="absolute right-0 top-5 z-20 rounded-lg border border-white/10 bg-[#101522]/95 px-3 py-2 shadow-lg backdrop-blur-xl sm:-right-3 sm:top-8 sm:rounded-xl sm:px-4 sm:py-3 md:right-0 lg:-right-3">
          <p className="text-[10px] text-gray-400 sm:text-xs">
            Based in
          </p>
          <p className="mt-0.5 text-xs font-medium text-white sm:mt-1 sm:text-sm">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="relative z-10 order-2 min-w-0 pt-3 md:order-1 md:pt-0">
        {/* Availability badge */}
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-300 sm:mb-6 sm:px-4 sm:text-sm">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>Full Stack Developer in Bangladesh</span>
        </div>

        {/* Main heading */}
        <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white min-[400px]:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          Building modern web experiences that{" "}
          <span className="bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            solve real problems.
          </span>
        </h1>

        {/* Introduction */}
        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
          Hi, I’m{" "}
          <span className="font-semibold text-white">
            Md Riazul Islam
          </span>{" "}
          — a Full Stack Developer passionate about building modern,
          scalable, and user-friendly web applications using Next.js,
          React, TypeScript, and modern web technologies.
        </p>

        <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:mt-4 sm:text-base">
          With a background in accounting, I bring analytical thinking,
          attention to detail, and problem-solving skills to development.
          I’m continuously learning and building projects to improve my skills.
        </p>

        {/* Action buttons */}
        <div className="mt-7 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8 sm:gap-4">
          <a
            href="#projects"
            className="explore-btn group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-5 py-3 text-sm font-semibold text-gray-950 transition-transform duration-300 hover:scale-[1.02] sm:px-6 sm:text-base"
          >
            <span>Explore My Work</span>
            <FaArrowUpRightFromSquare className="shrink-0 text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="/Riazul-Islam-Resume.pdf"
            download
            className="induction-btn inline-flex min-h-12 items-center justify-center"
          >
            <span className="induction-btn__field" aria-hidden="true" />
            <span className="induction-btn__content">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              <span>Download Resume</span>
            </span>
          </a>
        </div>

        {/* Social links */}
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
          <span className="mr-1 w-full text-xs font-medium tracking-wide text-gray-500 min-[420px]:w-auto sm:text-sm">
            Connect with me
          </span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/riazul-islam89"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            title="LinkedIn"
            className="social-link social-link--linkedin"
          >
            <span className="social-link__icon">
              <FaLinkedinIn size={19} />
            </span>
            <span className="social-link__label">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Riaz-RZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            title="GitHub"
            className="social-link social-link--github"
          >
            <span className="social-link__icon">
              <FaGithub size={19} />
            </span>
            <span className="social-link__label">GitHub</span>
          </a>

          {/* Email */}
          <a
            href="mailto:riazacc89@gmail.com"
            aria-label="Send me an email"
            title="Email"
            className="social-link social-link--email"
          >
            <span className="social-link__icon">
              <FaEnvelope size={18} />
            </span>
            <span className="social-link__label">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
