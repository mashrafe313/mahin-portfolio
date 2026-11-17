
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";


const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Organizations", href: "#leadership" },
  { name: "Contact", href: "#contact" },
  { name: "Education", href: "#education" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[19px] w-[19px]" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[19px] w-[19px]" aria-hidden="true">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.45H4.97V9h2.96v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.95v-4.6c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.68H9.23V9h2.83v1.29h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.55 1.97 3.55 4.53v5.15Z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E0D3] bg-white/95 backdrop-blur-md">
      <nav className="container-custom relative flex h-16 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#344E41]"
        >
          MAHIN<span className="text-[#C65D3A]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[12px] font-medium text-[#292A26] transition-colors hover:text-[#C65D3A]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://github.com/mashrafe313"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#344E41] transition-all hover:-translate-y-0.5 hover:text-[#C65D3A]"
          >
            <GitHubIcon />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mashrafe313"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#344E41] transition-all hover:-translate-y-0.5 hover:text-[#C65D3A]"
          >
            <LinkedInIcon />
          </Link>

          <Link
            href="#contact"
            className="retro-button ml-1 !px-4 !py-2 !text-xs"
          >
            Let's Talk <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#344E41] md:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-16 border-b border-[#E7E0D3] bg-white px-5 py-5 shadow-md md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-[#292A26] hover:text-[#C65D3A]"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-5 border-t border-[#E7E0D3] pt-4">
                <Link
                  href="https://github.com/mashrafe313"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#344E41] hover:text-[#C65D3A]"
                >
                  <GitHubIcon />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/mashrafe313"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#344E41] hover:text-[#C65D3A]"
                >
                  <LinkedInIcon />
                </Link>
              </div>

              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="retro-button w-fit !px-4 !py-2 !text-xs"
              >
                Let's Talk <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
