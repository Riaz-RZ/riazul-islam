
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(
        (section): section is HTMLElement =>
          section instanceof HTMLElement
      );

    let ticking = false;

    const updateActiveLink = () => {
      const marker = 130;
      let currentSection: HTMLElement | undefined;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          currentSection = section;
        } else {
          break;
        }
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        currentSection = sections[sections.length - 1];
      }

      setActiveLink(currentSection ? `#${currentSection.id}` : "");
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveLink);
        ticking = true;
      }
    };

    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    updateActiveLink();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Close the mobile menu when switching to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (href: string) => {
    const section = document.querySelector<HTMLElement>(href);

    setMenuOpen(false);
    setActiveLink(href);

    if (!section) return;

    window.history.replaceState(null, "", href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/90 backdrop-blur-xl">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("#home");
          }}
          aria-label="Go to homepage"
          className="shrink-0"
        >
          <Image
            src="/signature.png"
            alt="Riazul Islam logo"
            width={160}
            height={40}
            priority
            className="h-auto w-28 sm:w-36 md:w-40"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 text-sm md:flex lg:gap-2">
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
                className={`rounded-lg border px-3 py-2 transition-all duration-300 lg:px-4 ${
                  isActive
                    ? "border-emerald-300/60 bg-emerald-300/10 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.08)]"
                    : "border-transparent text-gray-300 hover:border-white/20 hover:text-emerald-300"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-200 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300 md:hidden"
        >
          {menuOpen ? (
            <FaXmark size={20} />
          ) : (
            <FaBars size={19} />
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#080b12]/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 border-t-transparent opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(link.href);
                }}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition-all duration-300 ${
                  isActive
                    ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-300"
                    : "border-transparent text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-emerald-300"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
