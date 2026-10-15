
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl grid-cols-1 items-center gap-14 overflow-hidden px-6 py-16 md:grid-cols-2 md:py-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]"
      />

      {/* Left: Hero content */}
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
          <span className="text-xs font-medium tracking-wide text-emerald-300">
            WEB DEVELOPER · BANGLADESH
          </span>
        </div>

        <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          Building useful things for the{" "}
          <span className="text-emerald-300">web.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
          Hi, I’m{" "}
          <span className="font-semibold text-white">Riazul Islam</span> — a
          developer focused on building clean, responsive web experiences
          with Next.js, React, TypeScript, and modern UI tools.
        </p>

        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500">
          Combining my attention to detail from an accounting background
          with a passion for solving problems through technology.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-300 px-6 py-3.5 text-sm font-semibold text-[#080b12] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-200"
          >
            Explore my work
            <span aria-hidden="true">↘</span>
          </a>

          <a
            href="https://github.com/Riaz-RZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:text-emerald-300"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Technologies */}
        <div className="mt-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Currently working with
          </p>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-xs text-gray-300 transition-colors hover:border-emerald-300/30 hover:text-emerald-300"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Right: Profile portrait */}
      <div className="relative z-10 mx-auto w-full max-w-md">
        {/* Emerald glow behind portrait */}
        <div
          aria-hidden="true"
          className="absolute inset-10 rounded-full bg-emerald-400/20 blur-[90px]"
        />

        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 aspect-square w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/10 shadow-[0_0_0_25px_rgba(140,245,207,0.025),0_0_0_55px_rgba(140,245,207,0.015)]"
        />

        {/* Portrait frame */}
        <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#1b3440] via-[#111a29] to-[#080b12] shadow-2xl shadow-emerald-950/20">
          <Image
            src="/my-portrait.png"
            alt="Portrait of Riazul Islam"
            fill
            priority
            sizes="(max-width: 768px) 85vw, 400px"
            className="object-contain object-bottom p-3 transition-transform duration-700 hover:scale-[1.03]"
          />

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-[#080b12]/80 via-[#080b12]/20 to-transparent"
          />
        </div>

        {/* Floating name card */}
        <div className="absolute -bottom-5 left-2 z-20 rounded-2xl border border-white/10 bg-[#101522]/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-6">
          <p className="font-semibold text-white">Md Riazul Islam</p>
          <p className="mt-1 text-xs text-emerald-300">
             Full-stack Developer
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
