
"use client";

import { useState } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

type Tab = "skills" | "education" | "experience";

const skills = [
  {
    category: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "CRUD Operations",
      "API Integration",
    ],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "VS Code", "Responsive Design"],
  },
];

const education = [
  {
    title: "Diploma in Full Stack Development (MERN)",
    institution:
      "Daffodil International Professional Training Institute",
    period: "Jan – Dec 2025",
    description:
      "Professional training focused on full-stack web development using the MERN stack.",
  },
  {
    title: "Master of Business Administration (MBA)",
    institution: "Accounting",
    period: "2017 – 2018",
  },
  {
    title: "Master of Business Studies (MBS)",
    institution: "Accounting",
    period: "2013 – 2014",
  },
  {
    title: "Bachelor of Business Studies (BBS)",
    institution: "Accounting",
    period: "2009 – 2012",
  },
];

const experience = [
  {
    title: "Full Stack Development",
    organization: "Personal Projects & Professional Training",
    period: "Current Focus",
    description:
      "Building web applications and strengthening practical development skills with Next.js, React, TypeScript, Node.js, and MongoDB.",
    points: [
      "Developing responsive web interfaces.",
      "Working with APIs and database-driven applications.",
      "Building portfolio projects to demonstrate practical skills.",
    ],
  },
  {
    title: "Accountant",
    organization: "Previous Professional Background",
    period: "Previous Experience",
    description:
      "Professional accounting experience that developed analytical thinking, attention to detail, and a structured approach to problem-solving.",
    points: [
      "Accounting and financial record management experience.",
      "Attention to accuracy and detail.",
      "Analytical thinking and problem-solving.",
    ],
  },
  {
    title: "Volunteer",
    organization: "Fire Service and Civil Defence Directorate",
    period: "Volunteer Experience",
    description:
      "Volunteer experience with the Fire Service and Civil Defence Directorate.",
    points: ["Experience contributing in a volunteer capacity."],
  },
];

const tabs = [
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "experience", label: "Experience", icon: FaBriefcase },
] as const;

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("skills");

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Section heading */}
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:text-sm sm:tracking-[0.25em]">
          Get to know me
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          About <span className="text-emerald-300">Me</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
          I’m Md Riazul Islam, a developer with an accounting background,
          focused on building modern, responsive, and user-friendly web
          applications. Explore my skills, education, and professional journey.
        </p>
      </div>

      {/* Responsive tabs */}
      <div
        role="tablist"
        aria-label="About me information"
        className="mx-auto mb-8 grid w-full max-w-2xl grid-cols-3 gap-1.5 rounded-xl border border-white/10 bg-white/3 p-1.5 sm:mb-10 sm:gap-2 sm:rounded-2xl sm:p-2"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`about-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="about-tab-panel"
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-w-0 items-center justify-center gap-1.5 rounded-lg px-1.5 py-3 text-xs font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:gap-2 sm:rounded-xl sm:px-4 sm:text-sm ${
                isActive
                  ? "bg-emerald-400 text-gray-950 shadow-lg shadow-emerald-400/10"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="shrink-0 text-sm sm:text-base" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div
        id="about-tab-panel"
        role="tabpanel"
        aria-labelledby={`about-tab-${activeTab}`}
        tabIndex={0}
        className="mx-auto max-w-5xl focus-visible:outline-none"
      >
        {/* Skills */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {skills.map((group) => (
              <article
                key={group.category}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:border-emerald-400/30 sm:p-5 lg:p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 sm:mb-5 sm:h-11 sm:w-11">
                  <FaCode size={20} />
                </div>

                <h3 className="mb-4 text-base font-semibold leading-6 text-white sm:text-lg">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="max-w-full wrap-break-word rounded-lg border border-white/10 bg-[#101522] px-2.5 py-2 text-xs leading-5 text-gray-300 sm:px-3 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Education */}
        {activeTab === "education" && (
          <div className="space-y-4 sm:space-y-5">
            {education.map((item) => (
              <article
                key={item.title}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:border-emerald-400/30 sm:p-6 lg:p-7"
              >
                <div className="flex min-w-0 flex-col gap-3 sm:gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 sm:h-11 sm:w-11">
                      <FaGraduationCap size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="wrap-break-word text-base font-semibold leading-6 text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 wrap-break-word text-sm leading-6 text-emerald-300">
                        {item.institution}
                      </p>

                      {item.description && (
                        <p className="mt-3 text-sm leading-7 text-gray-400">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="ml-13 w-fit max-w-full shrink-0 wrap-break-word rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-xs leading-5 text-gray-400 sm:ml-15 md:ml-0">
                    {item.period}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Experience */}
        {activeTab === "experience" && (
          <div className="space-y-4 sm:space-y-5">
            {experience.map((item) => (
              <article
                key={item.title}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/3 p-4 transition duration-300 hover:border-emerald-400/30 sm:p-6 lg:p-7"
              >
                <div className="flex min-w-0 flex-col gap-3 sm:gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 sm:h-11 sm:w-11">
                      <FaBriefcase size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="wrap-break-word text-base font-semibold leading-6 text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 wrap-break-word text-sm leading-6 text-emerald-300">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <span className="ml-13 w-fit max-w-full shrink-0 wrap-break-word rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-xs leading-5 text-gray-400 sm:ml-15 md:ml-0">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:mt-5">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-6 text-gray-300 sm:gap-3"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-300" />
                      <span className="min-w-0">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* More about my work */}
      <div className="mt-8 text-center sm:mt-10">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium text-emerald-300 transition hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b12]"
        >
          Explore my projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}