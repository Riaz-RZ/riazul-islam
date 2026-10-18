
"use client";
import RotatingEarth from "@/components/RotatingEarth";

import {

  SiNextdotjs,

} from "react-icons/si";
import {
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
  FaMobileScreenButton,
  FaFileInvoiceDollar,
  FaBrain
} from "react-icons/fa6";



const certifications = [
  {
    title: "Full Stack Development using MERN",
    issuer: "Daffodil International Professional Training Institute",
    detail: "Full Stack Development Diploma",
    icon: FaLaptopCode,
  },
  {
    title: "Web Design and Development for Freelancing",
    issuer: "ASSET",
    detail: "Level 3 · 3-month training",
    icon: FaCertificate,
  },
  {
    title: "Android App Development",
    issuer: "National Skills Development Authority (NSDA)",
    detail: "Level 4 · Kotlin",
    icon: FaMobileScreenButton,
  },
  {
    title: "Office Application for Smart Office",
    issuer: "University of Dhaka",
    detail: "Office applications training · 1 month",
    icon: FaGraduationCap,
  },
  {
    title: "QuickBooks and ERP Tally-9",
    issuer: "Accounting software training",
    detail: "Accounting and business software",
    icon: FaFileInvoiceDollar,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 scroll-mt-32"
    >
      {/* Section heading */}
      <div className="mb-18 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          My Expertise
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Skills & <span className="text-emerald-300">Certifications</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
          The technologies I work with and the professional training that
          supports my journey as a developer.
        </p>
      </div>

      {/* Part 1: Skills I Use */}
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
            <SiNextdotjs size={23} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Skills I Use
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Technologies and tools in my development toolkit
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
  <RotatingEarth />
</div>




{/* Currently Learning */}
<div className="mt-16">
  <div className="mb-6 flex items-center gap-3">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
      <FaBrain size={22} />
    </div>

    <div>
      <h3 className="text-2xl font-bold text-white">
        Currently Learning
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Expanding my skills through continuous learning
      </p>
    </div>
  </div>

  <article className="group relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-white/3 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.10)] sm:p-8">
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
        <FaLaptopCode size={27} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-lg font-bold leading-7 text-white transition-colors group-hover:text-emerald-300 sm:text-xl">
            AI-Driven Full Stack Web Engineering
          </h4>

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            In Progress
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-emerald-300">
          Programming Hero
        </p>

        <p className="mt-3 text-sm leading-7 text-gray-400">
          A 6-month course focused on full-stack web engineering
          and AI-driven development. I am strengthening my
          development skills through structured learning and
          practical project work.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "Full Stack Development",
            "Modern Web Engineering",
            "AI-Driven Development",
          ].map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-gray-300 transition-colors group-hover:border-emerald-400/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/5 blur-3xl transition-colors group-hover:bg-emerald-400/10" />
  </article>
</div>


      {/* Part 2: Certifications */}
      <div className="mt-30">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
            <FaGraduationCap size={23} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Certifications
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Training programs and professional qualifications
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => {
            const Icon = certification.icon;

            return (
              <article
                key={certification.title}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/15">
                  <Icon size={21} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-semibold leading-6 text-white">
                    {certification.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-emerald-300">
                    {certification.issuer}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {certification.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
