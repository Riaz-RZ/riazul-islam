
const projects = [
  {
    number: "01",
    icon: "৳",
    type: "Web Application",
    title: "Bazar Dor",
    description:
      "A Bengali-language market price website that helps users explore everyday product prices and compare price changes.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://bazar-dor-two-tau.vercel.app/",
    githubUrl: "https://github.com/Riaz-RZ",
    liveLabel: "Live Demo",
  },
  {
    number: "02",
    icon: "▦",
    type: "Full-stack Project",
    title: "Warehouse Inventory Management",
    description:
      "An inventory management project focused on product tracking, stock-in, stock-out, stock transfers, and admin and staff roles.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Riaz-RZ",
    liveLabel: "",
  },
  {
    number: "03",
    icon: "✚",
    type: "Web Application",
    title: "FitLog",
    description:
      "A fitness tracking application project built with a focus on a clean interface and a practical user experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Riaz-RZ",
    liveLabel: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              03 / Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Projects with a purpose.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-400">
            A collection of projects where I apply my
            skills, solve problems, and continue learning.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/5 md:p-7"
            >
              {/* Card Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-xl font-bold text-emerald-300">
                  {project.icon}
                </div>

                <span className="text-xs text-gray-500">
                  {project.number} / {project.type}
                </span>
              </div>

              {/* Project Details */}
              <h3 className="text-xl font-semibold tracking-tight transition group-hover:text-emerald-300">
                {project.title}
              </h3>

              <p className="mt-3 min-h-16 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-7 flex flex-wrap gap-5 border-t border-white/10 pt-5 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 transition hover:text-white"
                  >
                    {project.liveLabel} ↗
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 transition hover:text-emerald-300"
                >
                  GitHub Profile ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
