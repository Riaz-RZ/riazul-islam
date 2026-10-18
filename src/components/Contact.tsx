
"use client";

import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa6";

const email = "riazacc89@gmail.com";

const contactLinks = [
  {
    title: "Email",
    description: email,
    href: `mailto:${email}`,
    icon: FaEnvelope,
    action: "Send an email",
    external: false,
  },
  {
    title: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/riazul-islam89",
    icon: FaLinkedinIn,
    action: "View profile",
    external: true,
  },
  {
    title: "Phone",
    description: "+880 1715-069049",
    href: "tel:+8801715069049",
    icon: FaPhone,
    action: "Call me",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-48 w-48 rounded-full bg-emerald-400/5 blur-3xl sm:h-72 sm:w-72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-teal-400/4 blur-3xl sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-8 max-w-3xl sm:mb-10 md:mb-12">
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:gap-3 sm:text-sm sm:tracking-[0.25em]">
            <span className="h-px w-6 shrink-0 bg-emerald-300 sm:w-8" />
            Get in touch
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-4xl md:text-5xl">
            Have an idea?{" "}
            <span className="text-emerald-300">
              Let&apos;s make it happen.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            I&apos;m open to web development opportunities, collaborations,
            and projects where I can build useful digital experiences.
            I&apos;d be happy to hear from you.
          </p>
        </div>

        {/* Contact panels */}
        <div className="grid min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-[#101522] sm:rounded-3xl lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left panel */}
          <div className="flex min-w-0 flex-col justify-center border-b border-white/10 p-5 sm:p-7 md:p-9 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-xl text-emerald-300 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
              <FaEnvelope />
            </div>

            <h3 className="max-w-lg wrap-break-word text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
              Let&apos;s talk about your next project.
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-400 sm:mt-4 sm:text-base">
              Whether you have a job opportunity, a project idea, or simply
              want to connect with another developer, my inbox is open.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex w-fit max-w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-300 px-4 py-3 text-sm font-semibold text-[#080b12] transition duration-300 hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101522] sm:mt-8 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
            >
              Let&apos;s talk
              <FaArrowUpRightFromSquare className="shrink-0 text-sm" />
            </a>
          </div>

          {/* Right panel */}
          <div className="flex min-w-0 flex-col gap-3 p-4 sm:gap-4 sm:p-6 md:p-8 lg:justify-center lg:p-9 xl:p-10">
            <p className="mb-1 text-sm font-medium text-gray-400 sm:mb-2">
              Find me online
            </p>

            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={
                    link.external ? "noopener noreferrer" : undefined
                  }
                  aria-label={`${link.action}: ${link.description}`}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/2 p-3 transition duration-300 hover:border-emerald-300/40 hover:bg-emerald-300/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:gap-4 sm:rounded-2xl sm:p-4 md:hover:-translate-y-0.5"
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lg text-gray-300 transition group-hover:bg-emerald-300/10 group-hover:text-emerald-300 sm:h-12 sm:w-12 sm:text-xl">
                    <Icon />
                  </div>

                  {/* Contact details */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white sm:text-base">
                      {link.title}
                    </p>

                    <p className="mt-1 wrap-break-word text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                      {link.description}
                    </p>
                  </div>

                  <FaArrowUpRightFromSquare
                    aria-hidden="true"
                    className="shrink-0 text-xs text-gray-500 transition group-hover:text-emerald-300 sm:text-sm"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}