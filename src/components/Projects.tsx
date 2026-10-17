
import Image from "next/image";
import {
  FaArrowUpRightFromSquare,
  FaGithub,

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
    featured: true,
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
    featured: true,
  },

  {
    title: "Warehouse Inventory Management",
    category: "Inventory Management System",
    description:
      "A warehouse management application designed to help administrators and staff manage products, track stock-in and stock-out operations, transfer inventory, and monitor stock levels through a user-friendly dashboard.",
    image: "/projects/warehouse-inventory.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Riaz-RZ/Warehouse-Inventory-Management",
    status: "In Development",
    featured: true,
  },


];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-20 md:py-28"
    >
      {/* Section heading */}
      <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            What I&apos;ve built
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My <span className="text-emerald-300">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
            A selection of projects where I turn ideas into practical,
            responsive, and user-friendly digital experiences.
          </p>
        </div>

        <a
          href="https://github.com/Riaz-RZ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
        >
          <FaGithub size={17} />
          GitHub Profile
          <FaArrowUpRightFromSquare size={12} />
        </a>
      </div>

      {/* Project cards */}
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white/2 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-950/20 ${project.featured
                ? "border-white/10"
                : "border-white/10"
              }`}
          >
            {/* Project preview */}
            <div className="relative aspect-16/10 overflow-hidden border-b border-white/10 bg-linear-to-br from-[#132a2b] via-[#111827] to-[#080b12]">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Project information */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {/* Project Category */}
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                  {project.category}
                </span>

                {/* Project Status */}
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${project.status === "Live Project"
                      ? "border-emerald-400/30 bg-emerald-400/15 text-emerald-300"
                      : "border-amber-400/30 bg-amber-400/10 text-amber-300"
                    }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-300">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technology badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1.5 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-gray-950 transition duration-300 hover:bg-emerald-300"
                  >
                    Live Demo
                    <FaArrowUpRightFromSquare size={12} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
                  >
                    <FaGithub size={15} />
                    Source Code
                  </a>
                )}

                {!project.liveUrl && !project.githubUrl && (
                  <span className="text-xs text-gray-500">
                    Project details coming soon
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom link */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/Riaz-RZ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-emerald-300"
        >
          Explore more on GitHub
          <FaArrowUpRightFromSquare size={13} />
        </a>
      </div>
    </section>
  );
}