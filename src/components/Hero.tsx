
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
      className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-20"
    >
      {/* Left: Introduction */}
      <div className="relative z-10 order-2 md:order-1">
        {/* Availability badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Full Stack Developer in Bangladesh
        </div>

        {/* Main heading */}
        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building modern web experiences that{" "}
          <span className="bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            solve real problems.
          </span>
        </h1>

        {/* Introduction */}
        <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
          Hi, I’m{" "}
          <span className="font-semibold text-white">
            Md Riazul Islam
          </span>{" "}
          — a Full Stack Developer passionate about building modern, scalable,
          and user-friendly web applications using Next.js, React, TypeScript,
          and modern web technologies.
        </p>

        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
          With a background in accounting, I bring analytical thinking,
          attention to detail, and problem-solving skills to development.
          I’m continuously learning and building projects to improve my skills.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">

          <a
            href="#projects"
            className="explore-btn group inline-flex items-center gap-3 rounded-xl px-6 py-3 font-semibold text-gray-950"
          >
            <span>Explore My Work</span>
            <FaArrowUpRightFromSquare className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>



          <a href="/Riazul-Islam-Resume.pdf" download className="induction-btn">
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
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <span className="mr-1 text-sm font-medium tracking-wide text-gray-500">
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
            href="mailto:your-riazacc89@gmail.com"
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

      {/* Right: Profile portrait */}
      <div className="relative z-10 order-1 mx-auto w-full max-w-md md:order-2">
        {/* Ambient emerald glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-8 rounded-full bg-emerald-400/15 blur-[90px]"
        />

        {/* Decorative background circles */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full border border-emerald-400/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -left-4 h-40 w-40 rounded-full border border-emerald-400/10"
        />

        {/* Portrait frame */}
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#1b3440] via-[#111a29] to-[#080b12] shadow-2xl shadow-emerald-950/30">
          <Image
            src="/my-portrait.png"
            alt="Portrait of Md Riazul Islam"
            fill
            priority
            sizes="(max-width: 768px) 85vw, 400px"
            className="object-contain object-bottom p-3 transition-transform duration-700 hover:scale-[1.03]"
          />

          {/* Bottom gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-[#080b12]/70 to-transparent"
          />
        </div>

        {/* Floating name card */}
        <div className="absolute -bottom-5 left-2 z-20 rounded-2xl border border-white/10 bg-[#101522]/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-6">
          <p className="font-semibold text-white">
            Md Riazul Islam
          </p>
          <p className="mt-1 text-xs text-emerald-300">
            Full Stack Developer
          </p>
        </div>

        {/* Location card */}
        <div className="absolute right-0 top-8 z-20 rounded-xl border border-white/10 bg-[#101522]/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:-right-4">
          <p className="text-xs text-gray-400">Based in</p>
          <p className="mt-1 text-sm font-medium text-white">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </section>
  );
}
