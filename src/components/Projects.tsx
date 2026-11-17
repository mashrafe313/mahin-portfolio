
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full border-t border-[#E7E0D3] bg-[#F5F1E8] py-12 sm:py-14"
    >
      <div className="container-custom">

        {/* Section Heading */}
        <div className="mb-7 flex items-end justify-between gap-3">
          <div>
            <p className="retro-label mb-1 text-[9px]">
              Selected Works
            </p>

            <h2 className="text-2xl font-bold text-[#344E41] sm:text-3xl">
              Things I've built
              <span className="text-[#C65D3A]">.</span>
            </h2>

            <p className="mt-1 text-xs text-[#77776F]">
              A few projects I've worked on.
            </p>
          </div>

          <span className="retro-label text-[9px]">
            {projects.length} PROJECTS
          </span>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex gap-4 border border-[#E7E0D3] bg-white/60 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#C65D3A] hover:shadow-sm sm:p-4"
            >
              {/* Thumbnail */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden border border-[#E7E0D3] bg-white sm:h-28 sm:w-32"
                aria-label={`View ${project.name} details`}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="128px"
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </Link>

              {/* Information */}
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div>
                  <p className="retro-label text-[8px]">
                    {project.category}
                  </p>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="mt-1 text-sm font-bold text-[#344E41] hover:text-[#C65D3A] sm:text-base">
                      {project.name}
                    </h3>
                  </Link>

                  <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-[#77776F] sm:text-xs">
                    {project.description}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="border border-[#E7E0D3] bg-white px-1.5 py-0.5 text-[8px] text-[#344E41]"
                      >
                        {technology}
                      </span>
                    ))}

                    {project.technologies.length > 3 && (
                      <span className="px-1 py-0.5 text-[8px] text-[#77776F]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex shrink-0 items-center gap-1 text-[10px] font-semibold text-[#C65D3A] hover:text-[#A8492D]"
                  >
                    Details
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
