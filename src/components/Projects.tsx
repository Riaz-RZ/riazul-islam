
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCircleCheck,
  FaXmark,
  FaCode,
} from "react-icons/fa6";

const projects = [
  {
    title: "Bazar Dor",
    category: "Web Application",
    description:
      "A Bengali-language market price website that helps users explore daily prices of essential products and compare price changes over time.",
    image: "/projects/bazar-dor.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://bazar-dor-two-tau.vercel.app/",
    githubUrl: "https://github.com/Riaz-RZ/Bazar-Dor",
    status: "Live Project",
    features: [
      "Browse essential products and categories.",
      "View today's prices alongside previous price records.",
      "Compare price changes over time.",
      "Explore a responsive Bengali-language interface.",
    ],
  },
  {
    title: "FitLog",
    category: "Fitness Application",
    description:
      "A fitness-focused application designed to help users organize their fitness journey through a modern, responsive interface.",
    image: "/projects/Fit-log.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
    liveUrl: "https://ph-a6-fit-log-five.vercel.app/",
    githubUrl: "https://github.com/Riaz-RZ/PH-A6-FitLog",
    status: "In Development",
    features: [
      "Explore a fitness-focused application.",
      "Use a modern and responsive interface.",
      "Navigate a clean application layout.",
      "Built with reusable components and modern web technologies.",
    ],
  },
  {
    title: "Warehouse Inventory Management",
    category: "Inventory Management System",
    description:
      "A warehouse management application designed to help administrators and staff manage products, track stock-in and stock-out operations, transfer inventory, and monitor stock levels through a user-friendly dashboard.",
    image: "/projects/warehouseinventory.webp",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl: "",
    githubUrl:
      "https://github.com/Riaz-RZ/Warehouse-Inventory-Management",
    status: "In Development",
    features: [
      "Admin and staff role-based access.",
      "Manage products and inventory records.",
      "Track stock-in and stock-out operations.",
      "Transfer stock and monitor inventory levels.",
      "Manage inventory through a dashboard.",
    ],
  },
];

type Project = (typeof projects)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Manage Escape key, background scrolling, and initial modal focus.
  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);

      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      }
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl scroll-mt-36 px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Section heading */}
      <div className="mb-9 flex flex-col gap-5 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:text-sm sm:tracking-[0.25em]">
            What I&apos;ve built
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My <span className="text-emerald-300">Projects</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8">
            A selection of projects where I turn ideas into practical,
            responsive, and user-friendly digital experiences.
          </p>
        </div>

        <a
          href="https://github.com/Riaz-RZ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit max-w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-gray-300 backdrop-blur-xl transition duration-300 hover:border-emerald-400/40 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:px-5"
        >
          <FaGithub size={17} />
          GitHub Profile
          <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>

      {/* Responsive project cards */}
      <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/4 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-emerald-300/40 hover:bg-white/6 hover:shadow-xl hover:shadow-emerald-950/20 md:hover:-translate-y-1.5"
          >
            {/* Project screenshot */}
            <div className="relative aspect-16/10 w-full overflow-hidden border-b border-white/10 bg-linear-to-br from-[#132a2b] via-[#111827] to-[#080b12]">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="object-cover object-top p-2 transition-transform duration-700 sm:p-3 md:group-hover:scale-105"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#080b12]/70 via-transparent to-transparent opacity-70"
              />

              {/* Status */}
              <span
                className={`absolute right-2 top-2 max-w-[calc(100%-1rem)] rounded-full border px-2.5 py-1.5 text-[11px] font-medium shadow-lg backdrop-blur-xl sm:right-3 sm:top-3 sm:px-3 sm:text-xs ${
                  project.status === "Live Project"
                    ? "border-emerald-300/30 bg-emerald-950/70 text-emerald-300"
                    : "border-amber-300/30 bg-amber-950/70 text-amber-200"
                }`}
              >
                {project.status}
              </span>
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-emerald-300 sm:text-xs">
                {project.category}
              </p>

              <h3 className="wrap-break-word text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-emerald-300 sm:text-xl">
                {project.title}
              </h3>

              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-200 transition duration-300 hover:border-emerald-300 hover:bg-emerald-300 hover:text-[#07130f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101522] sm:mt-6 sm:text-base"
              >
                View Project
                <FaArrowUpRightFromSquare size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Project details modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto overscroll-contain bg-black/75 p-2 backdrop-blur-md sm:items-center sm:p-4 md:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative my-2 max-h-[calc(100dvh-1rem)] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl border border-emerald-300/20 bg-[#0d1420] shadow-2xl shadow-emerald-950/30 sm:my-4 sm:max-h-[90dvh] sm:rounded-3xl"
          >
            {/* Modal header */}
            <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-white/10 bg-[#0d1420]/95 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4 md:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300 sm:text-xs sm:tracking-[0.2em]">
                Project Details
              </p>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="cursor-pointer flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <FaXmark size={16} />
              </button>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              {/* Title and category */}
              <div className="mb-5 sm:mb-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="max-w-full wrap-break-word rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                    {selectedProject.category}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      selectedProject.status === "Live Project"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border-amber-400/30 bg-amber-400/10 text-amber-200"
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                </div>

                <h3
                  id="project-modal-title"
                  className="wrap-break-word text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
                >
                  {selectedProject.title}
                </h3>
              </div>

              {/* Screenshot */}
              <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-[#132a2b] to-[#080b12] sm:mb-7 sm:rounded-2xl">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-top"
                />
              </div>

              {/* Description */}
              <div className="mb-6 sm:mb-7">
                <h4 className="mb-3 flex items-center gap-2 text-base font-semibold text-white sm:text-lg">
                  <FaCode className="shrink-0 text-emerald-300" />
                  About This Project
                </h4>

                <p className="text-sm leading-7 text-gray-400 sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-7">
                <h4 className="mb-4 text-base font-semibold text-white sm:text-lg">
                  Key Features
                </h4>

                <ul className="space-y-3">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-6 text-gray-300 sm:gap-3"
                    >
                      <FaCircleCheck className="mt-1 shrink-0 text-emerald-300" />
                      <span className="min-w-0">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-7 sm:mb-8">
                <h4 className="mb-4 text-base font-semibold text-white sm:text-lg">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full wrap-break-word rounded-lg border border-emerald-300/15 bg-emerald-300/6 px-2.5 py-2 text-xs leading-5 text-emerald-100 sm:px-3 sm:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:pt-6">
                {selectedProject.liveUrl ? (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-300 px-4 py-3.5 text-sm font-semibold text-[#07130f] transition hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:px-5 sm:text-base"
                  >
                    Live Demo
                    <FaArrowUpRightFromSquare size={13} />
                  </a>
                ) : (
                  <div className="inline-flex min-w-0 flex-1 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5 px-4 py-3.5 text-center text-sm leading-6 text-amber-200 sm:px-5">
                    Live Demo Coming Soon
                  </div>
                )}

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-medium text-gray-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:px-5 sm:text-base"
                >
                  <FaGithub size={17} />
                  Source Code
                  <FaArrowUpRightFromSquare size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom link */}
      <div className="mt-9 text-center sm:mt-12">
        <a
          href="https://github.com/Riaz-RZ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-400 transition hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b12]"
        >
          Explore more on GitHub
          <FaArrowUpRightFromSquare size={13} />
        </a>
      </div>
    </section>
  );
}
