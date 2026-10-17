
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement =>
        section instanceof HTMLElement
      );

    let ticking = false;

    const updateActiveLink = () => {
      const marker = 130;
      let currentSection: HTMLElement | undefined;

      // Find the last section that has reached
      // the active position below the navbar.
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          currentSection = section;
        } else {
          break;
        }
      }

      // Ensure Contact becomes active at the bottom.
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        currentSection = sections[sections.length - 1];
      }

      if (currentSection) {
        setActiveLink(`#${currentSection.id}`);
      } else {
        setActiveLink("");
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveLink);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    // Update the active link when a navbar link is clicked.
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    updateActiveLink();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const section = document.querySelector<HTMLElement>(href);

    if (!section) return;

    setActiveLink(href);

    // Update the URL hash without triggering a second jump.
    window.history.replaceState(null, "", href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("#home");
          }}
        >
          <Image
            src="/signature.png"
            alt="Riazul Islam logo"
            width={160}
            height={40}
          />
        </a>

        <div className="flex items-center gap-2 text-sm">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-lg border px-4 py-2 transition-all duration-300 ${isActive
                    ? "border-emerald-300/60 bg-emerald-300/10 text-emerald-300"
                    : "border-transparent text-gray-300 hover:border-white/20 hover:text-emerald-300"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
