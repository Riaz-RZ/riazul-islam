
const journey = [
  {
    number: "01",
    period: "Previous Experience",
    title: "Accounting & Professional Experience",
    description:
      "Built a strong foundation in accuracy, organization, consistency, and problem-solving through my accounting background.",
    tags: ["Accounting", "Attention to Detail", "Problem Solving"],
  },
  {
    number: "02",
    period: "Professional Training",
    title: "MERN Stack Development",
    description:
      "Pursued full-stack development training, learning to build interactive web applications and work with frontend and backend technologies.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    number: "03",
    period: "Expanding My Skills",
    title: "Modern Web Development",
    description:
      "Building practical projects with Next.js, TypeScript, Tailwind CSS, and REST APIs while strengthening my understanding of application development.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "04",
    period: "Current Focus",
    title: "Building Projects & Growing",
    description:
      "Developing portfolio projects such as Bazar Dor and Warehouse Inventory Management, learning from challenges, and preparing for opportunities in web development.",
    tags: ["Projects", "Git & GitHub", "Continuous Learning"],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="border-t border-white/10 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From accounting to{" "}
            <span className="text-emerald-300">
              web development.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            Every step has taught me something valuable. I am combining
            my professional experience with continuous learning to build
            useful, modern web applications.
          </p>
        </div>

        {/* Journey timeline */}
        <div className="relative">
          <div className="absolute bottom-6 left-5 top-6 w-px bg-emerald-300/20 sm:left-6" />

          <div className="space-y-6">
            {journey.map((item) => (
              <article
                key={item.number}
                className="relative pl-14 sm:pl-16"
              >
                <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/30 bg-[#080b12] text-sm font-bold text-emerald-300 sm:left-1">
                  {item.number}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:border-emerald-300/30 sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    {item.period}
                  </p>

                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
