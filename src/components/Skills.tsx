
const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive user interfaces",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    title: "Backend Development",
    description: "Learning server-side development",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Other Technologies",
    description: "Development workflow and additional skills",
    skills: [
      "Git",
      "GitHub",
      "Kotlin",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              02 / My Toolkit
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Tools I work with.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-400">
            Technologies I use to build projects while
            continuously improving my development skills.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-white/3 p-6 transition hover:border-emerald-300/30"
            >
              <h3 className="text-lg font-semibold">
                {group.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/4 px-3 py-2 text-xs text-gray-300 transition hover:border-emerald-300/40 hover:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
