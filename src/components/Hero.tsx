
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.03.76 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.04 18.34H5.07V9.03h2.97v9.31ZM6.55 7.76a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.4 10.58h-2.96v-4.53c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.61H9.8V9.03h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.55 1.97 3.55 4.53v5.01Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="border-b border-[#E7E0D3] bg-[#F5F1E8]"
    >
      <div className="container-custom grid min-h-[500px] items-center gap-10 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-16 lg:py-16">

        {/* LEFT: INTRODUCTION */}
        <div className="flex flex-col justify-center md:pl-6 lg:pl-12">
          <p className="retro-label mb-4">
            Hello, I'm Mahin Mashrafe
          </p>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-[#344E41] sm:text-5xl lg:text-[58px]">
            Building the web,
            <br />
            <span className="text-[#C65D3A]">
              one pixel
            </span>{" "}
            at a time.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#77776F] sm:text-base">
            A CSE undergraduate and aspiring frontend developer
            passionate about creating clean, responsive and
            meaningful digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#projects" className="retro-button">
              Explore My Work
              <ArrowUpRight size={15} />
            </Link>

            <a
              href="/resume.pdf"
              download="Mahin-Mashrafe-Resume.pdf"
              className="outline-button"
            >
              Download Resume
              <ArrowDown size={15} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex items-center gap-5">
            <span className="retro-label">
              Find me on
            </span>

            <Link
              href="https://github.com/mashrafe313"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#344E41] transition-colors hover:text-[#C65D3A]"
            >
              <GithubIcon />
            </Link>

            <Link
              href="https://www.linkedin.com/in/mashrafe313"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#344E41] transition-colors hover:text-[#C65D3A]"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>

        {/* RIGHT: PROFILE PHOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="relative box-border w-full max-w-[340px] border border-[#344E41] p-5 sm:p-7">
            {/* Decorative Corners */}
            <span className="absolute -right-2 -top-2 h-12 w-12 border-r-2 border-t-2 border-[#C65D3A]" />

            <span className="absolute -bottom-2 -left-2 h-12 w-12 border-b-2 border-l-2 border-[#C65D3A]" />

            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E7E0D3]">
              <Image
                src="/images/mahin.jpg"
                alt="Portrait of Mahin Mashrafe"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 80vw, 340px"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
