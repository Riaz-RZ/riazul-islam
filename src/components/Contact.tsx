"use client";

import { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

const email = "riazacc89@gmail.com";

export default function Contact() {
  const [] = useState(false);


  const contactLinks = [
    {
      title: "Email",
      description: email,
      href: `mailto:${email}`,
      icon: FaEnvelope,
      action: "Send an email",
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      href: "https://www.linkedin.com/in/riazul-islam89",
      icon: FaLinkedinIn,
      action: "View profile",
    },
    {
      title: "GitHub",
      description: "Explore my projects and code",
      href: "https://github.com/Riaz-RZ",
      icon: FaGithub,
      action: "View repositories",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-20 md:py-28"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-emerald-400/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            <span className="h-px w-8 bg-emerald-300" />
            Get in touch
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Have an idea?{" "}
            <span className="text-emerald-300">
              Let&apos;s make it happen.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I&apos;m open to web development opportunities, collaborations,
            and projects where I can build useful digital experiences.
            I&apos;d be happy to hear from you.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#101522] md:grid-cols-[1.1fr_0.9fr]">
          {/* Left panel */}
          <div className="flex flex-col justify-between border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-10 lg:p-12">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-2xl text-emerald-300">
                <FaEnvelope />
              </div>

              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Let&apos;s talk about your next project.
              </h3>

              <p className="mt-4 max-w-md leading-7 text-gray-400">
                Whether you have a job opportunity, a project idea, or simply
                want to connect with another developer, my inbox is open.
              </p>

              <a
                href={`mailto:${email}`}
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-emerald-300 px-6 py-3.5 font-semibold text-[#080b12] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                Let&apos;s talk
                <FaArrowUpRightFromSquare className="text-sm" />
              </a>
            </div>

           
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4 p-6 md:justify-center md:p-8 lg:p-10">
            <p className="mb-1 text-sm font-medium text-gray-400">
              Find me online
            </p>

            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.title === "Email" ? undefined : "_blank"}
                  rel={
                    link.title === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/2 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-300/4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl text-gray-300 transition group-hover:bg-emerald-300/10 group-hover:text-emerald-300">
                    <Icon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">
                      {link.title}
                    </p>

                    <p className="mt-1 wrap-break-word text-sm text-gray-400">
                      {link.description}
                    </p>
                  </div>

                  <FaArrowUpRightFromSquare className="shrink-0 text-sm text-gray-500 transition group-hover:text-emerald-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}