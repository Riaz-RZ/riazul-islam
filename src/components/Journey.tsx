
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaArrowDown,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const journey = [
  {
    number: "01",
    period: "My Foundation",
    title: "Accounting & Business Background",
    description:
      "My background in accounting helped me develop analytical thinking, attention to detail, and an understanding of business processes. These skills now influence how I approach software development and problem-solving.",
    icon: FaBriefcase,
    tags: ["Accounting", "Analysis", "Problem-Solving"],
    type: "Foundation",
  },
  {
    number: "02",
    period: "My Learning Journey",
    title: "Discovering Web Development",
    description:
      "I began learning web development by building a foundation in HTML, CSS, JavaScript, and responsive design. I then pursued structured full-stack training to understand how frontend interfaces connect with backend systems and databases.",
    icon: FaGraduationCap,
    tags: ["HTML", "CSS", "JavaScript", "MERN Stack"],
    type: "Learning",
  },
  {
    number: "03",
    period: "Expanding My Skills",
    title: "Exploring Modern Web Technologies",
    description:
      "I am strengthening my skills in Next.js, TypeScript, React, and Tailwind CSS. My focus is on writing maintainable code, creating responsive interfaces, and developing practical web applications.",
    icon: FaCode,
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    type: "Currently Learning",
  },
  {
    number: "04",
    period: "Putting Skills into Practice",
    title: "Building Real-World Projects",
    description:
      "I apply what I learn by developing personal projects. Bazar Dor is my Bengali-language market price website. I am also working on FitLog and exploring Warehouse Inventory Management to continue improving my development skills.",
    icon: FaLaptopCode,
    tags: ["Bazar Dor", "FitLog", "Git & GitHub"],
    type: "Building",
  },
];

export default function Journey() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Read browser preferences outside the effect.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  useEffect(() => {
    // Skip scroll animations when reduced motion is preferred.
    // The JSX fallback below keeps all items visible.
    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );

            setVisibleItems((previous) =>
              previous.includes(index)
                ? previous
                : [...previous, index]
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    itemRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      id="journey"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-32 h-56 w-56 rounded-full bg-emerald-400/5 blur-3xl sm:left-0 sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <p className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 sm:gap-3 sm:text-sm sm:tracking-[0.25em]">
            <span className="h-px w-5 bg-emerald-300 sm:w-8" />
            My Journey
            <span className="h-px w-5 bg-emerald-300 sm:w-8" />
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white min-[400px]:text-4xl sm:mt-5 md:text-5xl">
            From numbers to{" "}
            <span className="text-emerald-300">code.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            Every step has shaped the developer I am becoming.
            Here&apos;s how my background, learning, and projects
            are coming together.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-4 top-6 w-px bg-linear-to-b from-emerald-300/60 via-emerald-300/20 to-transparent sm:left-5 lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-7 sm:space-y-9 lg:space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;

              const isVisible =
                visibleItems.includes(index) ||
                reducedMotion ||
                typeof IntersectionObserver === "undefined";

              const isRight = index % 2 === 1;

              return (
                <div
                  key={item.number}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-index={index}
                  className={`relative grid grid-cols-[32px_minmax(0,1fr)] gap-3 transition-[opacity,transform] duration-700 ease-out sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-4 lg:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] lg:gap-5 motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center lg:col-start-2">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-500 sm:h-10 sm:w-10 lg:h-12 lg:w-12 ${
                        isVisible
                          ? "border-emerald-300/60 bg-[#0b0f14] text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.12)]"
                          : "border-white/15 bg-[#101522] text-gray-500"
                      }`}
                    >
                      <Icon className="text-sm sm:text-base lg:text-lg" />
                    </div>
                  </div>

                  {/* Timeline card */}
                  <article
                    className={`group col-start-2 row-start-1 min-w-0 rounded-xl border border-white/10 bg-[#101522]/90 p-4 transition-colors duration-300 hover:border-emerald-300/30 hover:bg-[#121a25] sm:rounded-2xl sm:p-6 lg:p-7 ${
                      isRight
                        ? "lg:col-start-3 lg:row-start-1"
                        : "lg:col-start-1 lg:row-start-1 lg:text-right"
                    }`}
                  >
                    {/* Number and status */}
                    <div
                      className={`flex flex-wrap items-center gap-2 sm:gap-3 ${
                        !isRight ? "lg:justify-end" : ""
                      }`}
                    >
                      <span className="text-xs font-bold tracking-[0.2em] text-emerald-300">
                        {item.number}
                      </span>

                      <span className="max-w-full rounded-full border border-emerald-300/15 bg-emerald-300/6 px-2.5 py-1 text-[10px] leading-4 text-emerald-200 sm:px-3 sm:text-xs">
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-medium text-gray-500 sm:mt-5 sm:text-sm">
                      {item.period}
                    </p>

                    <h3 className="mt-2 wrap-break-word text-lg font-semibold leading-snug text-white transition-colors group-hover:text-emerald-200 sm:text-xl lg:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 wrap-break-word text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base sm:leading-7">
                      {item.description}
                    </p>

                    {/* Technology tags */}
                    <div
                      className={`mt-4 flex flex-wrap gap-2 sm:mt-5 ${
                        !isRight ? "lg:justify-end" : ""
                      }`}
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="max-w-full wrap-break-word rounded-lg border border-white/10 bg-white/3 px-2 py-1.5 text-[11px] leading-4 text-gray-300 sm:px-2.5 sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project link */}
                    {index === 3 && (
                      <a
                        href="https://bazar-dor-two-tau.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-5 inline-flex max-w-full items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#101522] ${
                          !isRight ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <span>Explore Bazar Dor</span>
                        <FaArrowUpRightFromSquare className="shrink-0 text-xs" />
                      </a>
                    )}
                  </article>

                  {/* Empty opposite column on desktop */}
                  <div
                    aria-hidden="true"
                    className={`hidden lg:block ${
                      isRight
                        ? "lg:col-start-1 lg:row-start-1"
                        : "lg:col-start-3 lg:row-start-1"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-emerald-300/15 bg-emerald-300/4 p-5 text-center sm:mt-16 sm:rounded-2xl sm:p-8">
          <p className="text-base font-semibold text-white sm:text-lg">
            The journey is still going on.
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            I&apos;m continuously learning, building, and improving
            one project at a time.
          </p>

          <a
            href="#projects"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b12]"
          >
            See what I&apos;m building
            <FaArrowDown className="shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}