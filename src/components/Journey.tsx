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

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
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
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    itemRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      className="relative overflow-hidden border-t border-white/10 px-6 py-20 md:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-emerald-400/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            <span className="h-px w-8 bg-emerald-300" />
            My Journey
            <span className="h-px w-8 bg-emerald-300" />
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
            From numbers to{" "}
            <span className="text-emerald-300">code.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Every step has shaped the developer I am becoming.
            Here&apos;s how my background, learning, and projects
            are coming together.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-8 w-px bg-linear-to-b from-emerald-300/60 via-emerald-300/20 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isVisible =
                typeof IntersectionObserver === "undefined" ||
                visibleItems.includes(index);
              const isRight = index % 2 === 1;

              return (
                <div
                  key={item.number}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  data-index={index}
                  className={`relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 transition-all duration-700 ease-out md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-5 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-12 md:w-12 ${
                        isVisible
                          ? "border-emerald-300/60 bg-[#0b0f14] text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.12)]"
                          : "border-white/15 bg-[#101522] text-gray-500"
                      }`}
                    >
                      <Icon className="text-base md:text-lg" />
                    </div>
                  </div>

                  {/* Timeline card */}
                  <article
                    className={`group col-start-2 row-start-1 min-w-0 rounded-2xl border border-white/10 bg-[#101522]/90 p-5 transition-all duration-300 hover:border-emerald-300/30 hover:bg-[#121a25] sm:p-7 ${
                      isRight
                        ? "md:col-start-3 md:row-start-1"
                        : "md:col-start-1 md:row-start-1 md:text-right"
                    }`}
                  >
                    {/* Number and status */}
                    <div
                      className={`flex flex-wrap items-center gap-3 ${
                        !isRight ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-xs font-bold tracking-[0.2em] text-emerald-300">
                        {item.number}
                      </span>

                      <span className="rounded-full border border-emerald-300/15 bg-emerald-300/6 px-3 py-1 text-xs text-emerald-200">
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-5 text-sm font-medium text-gray-500">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-emerald-200 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                      {item.description}
                    </p>

                    {/* Technology tags */}
                    <div
                      className={`mt-5 flex flex-wrap gap-2 ${
                        !isRight ? "md:justify-end" : ""
                      }`}
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/8 bg-white/3 px-2.5 py-1.5 text-xs text-gray-300"
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
                        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200 ${
                          !isRight ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        Explore Bazar Dor
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    )}
                  </article>

                  {/* Empty opposite column on desktop */}
                  <div
                    aria-hidden="true"
                    className={`hidden md:block ${
                      isRight
                        ? "md:col-start-1 md:row-start-1"
                        : "md:col-start-3 md:row-start-1"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-emerald-300/15 bg-emerald-300/4 p-6 text-center sm:p-8">
          <p className="text-lg font-semibold text-white">
            The journey is still going on.
          </p>

          <p className="mt-3 leading-7 text-gray-400">
            I&apos;m continuously learning, building, and improving
            one project at a time.
          </p>

          <a
            href="#projects"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
          >
            See what I&apos;m building
            <FaArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
}