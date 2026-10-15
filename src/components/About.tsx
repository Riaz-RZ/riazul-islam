
export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              01 / About Me
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Curious by nature.
              <br />
              Developer by choice.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-400">
            Combining a detail-oriented professional
            background with a growing passion for
            software development.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4 leading-7 text-gray-400">
            <p>
              Hi, I’m Riazul Islam. I’m currently
              learning full-stack web development
              and building practical projects using
              modern web technologies.
            </p>

            <p>
              I enjoy turning ideas into clean,
              responsive, and user-friendly interfaces.
              My current focus is on React, Next.js,
              TypeScript, and Tailwind CSS while
              strengthening my backend development skills.
            </p>

            <p>
              My previous experience in accounting
              has helped me develop attention to detail,
              consistency, and a structured approach
              to solving problems.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/3 p-5">
              <h3 className="text-lg font-bold text-emerald-300">
                Next.js
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Modern React applications
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/3 p-5">
              <h3 className="text-lg font-bold text-emerald-300">
                TypeScript
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Reliable, typed code
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/3 p-5">
              <h3 className="text-lg font-bold text-emerald-300">
                Tailwind CSS
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Responsive UI design
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/3 p-5">
              <h3 className="text-lg font-bold text-emerald-300">
                Always Learning
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Growing through projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
