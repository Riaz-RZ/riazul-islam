
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
    institution: "Daffodil International Professional Training Institute",
    period: "Jan – Dec 2025",
    description:
      "Professional training focused on full-stack web development using the MERN stack.",
  },
  {
    title: "Master of Business Administration (MBA)",
    institution: "Accounting",
    period: "2017 – 2018",
    description: "Grade: 3.80",
  },
  {
    title: "Master of Business Studies (MBS)",
    institution: "Accounting",
    period: "2013 – 2014",
    description: "Result: First Class",
  },
  {
    title: "Bachelor of Business Studies (BBS)",
    institution: "Accounting",
    period: "2009 – 2012",
    description: "Result: Second Class",
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
    points: [
      "Experience contributing in a volunteer capacity.",
    ],
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
      className="relative mx-auto max-w-7xl px-6 py-20 md:py-28"
    >
      {/* Section heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Get to know me
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          About <span className="text-emerald-300">Me</span>
        </h2>

        <p className="mt-5 text-base leading-8 text-gray-400">
          I’m Md Riazul Islam, a developer with an accounting background,
          focused on building modern, responsive, and user-friendly web
          applications. Explore my skills, education, and professional journey.
        </p>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="About me information"
        className="mx-auto mb-10 grid max-w-2xl grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2"
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
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-300 sm:px-5 ${
                isActive
                  ? "bg-emerald-400 text-gray-950 shadow-lg shadow-emerald-400/10"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="shrink-0" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div
        id="about-tab-panel"
        role="tabpanel"
        aria-labelledby={`about-tab-${activeTab}`}
        className="mx-auto max-w-5xl"
      >
        {/* Skills */}
        {activeTab === "skills" && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <FaCode size={20} />
                </div>

                <h3 className="mb-4 text-lg font-semibold text-white">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-[#101522] px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {activeTab === "education" && (
          <div className="relative space-y-5">
            {education.map((item) => (
              <article
                key={item.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-emerald-400/30 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <FaGraduationCap size={20} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-emerald-300">
                        {item.institution}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 self-start rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400">
                    {item.period}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Experience */}
        {activeTab === "experience" && (
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-emerald-400/30 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <FaBriefcase size={18} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-emerald-300">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 self-start rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400">
                    {item.period}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-emerald-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* More about my work */}
      <div className="mt-10 text-center">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
        >
          Explore my projects
          <FaArrowRight className="transition-transform duration-300 hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}