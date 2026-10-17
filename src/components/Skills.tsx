
"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiKotlin,
  SiHtml5,
  SiCss,
  SiBootstrap,
} from "react-icons/si";
import {
  FaGraduationCap,
  FaCertificate,
  FaLaptopCode,
  FaMobileScreenButton,
  FaFileInvoiceDollar,
} from "react-icons/fa6";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
];

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
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-28"
    >
      {/* Section heading */}
      <div className="mb-14 text-center">
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
        <div className="mb-7 flex items-center gap-3">
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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex min-h-32 flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:shadow-lg hover:shadow-emerald-950/20"
              >
                <Icon
                  size={34}
                  aria-hidden="true"
                  style={{ color: skill.color }}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part 2: Certifications */}
      <div className="mt-20">
        <div className="mb-7 flex items-center gap-3">
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
