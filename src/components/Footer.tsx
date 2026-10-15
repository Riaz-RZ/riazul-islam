import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Logo and copyright */}
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="text-lg font-extrabold tracking-tight text-white"
          >
            <Image
              src="/Portfolio-logo.png"
              alt="Riazul Islam logo"
              width={160}
              height={40}
            />
          </a>

          <p className="mt-1 text-sm text-gray-400">
            © {new Date().getFullYear()} Riazul Islam. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-400">
          <a
            href="https://github.com/Riaz-RZ"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-emerald-300"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/riazul-islam89"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-emerald-300"
          >
            LinkedIn ↗
          </a>

          <a
            href="mailto:riazacc89@gmail.com"
            className="transition hover:text-emerald-300"
          >
            Email ↗
          </a>

          <a
            href="#home"
            className="rounded-lg border border-white/10 px-3 py-2 text-white transition hover:border-emerald-300/40 hover:text-emerald-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-gray-500">
        Designed and built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
