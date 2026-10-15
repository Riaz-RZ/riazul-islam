
export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            05 / Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-emerald-300">useful.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            I&apos;m open to web development opportunities,
            collaborations, and interesting projects.
            Feel free to get in touch!
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid gap-6 rounded-2xl border border-white/10 bg-[#101522] p-6 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Let&apos;s connect
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Have an opportunity or an idea to discuss?
              I&apos;d love to hear from you.
            </p>

            <a
              href="mailto:riazacc89@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-5 py-3 font-semibold text-[#080b12] transition hover:bg-emerald-200"
            >
              Email me
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:riazacc89@gmail.com"
              className="rounded-xl border border-white/10 p-4 transition hover:border-emerald-300/50 hover:bg-white/5"
            >
              <p className="text-sm text-gray-400">Email</p>
              <p className="mt-1 break-all font-medium text-white">
                riazacc89@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/riazul-islam89"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-4 transition hover:border-emerald-300/50 hover:bg-white/5"
            >
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="mt-1 font-medium text-white">
                Connect with me ↗
              </p>
            </a>

            <a
              href="https://github.com/Riaz-RZ"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-4 transition hover:border-emerald-300/50 hover:bg-white/5"
            >
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="mt-1 font-medium text-white">
                Explore my projects ↗
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
