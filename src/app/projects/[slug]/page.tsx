
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Globe,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projects from "@/data/projects.json";

type Project = {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

const projectList = projects as Project[];

export function generateStaticParams() {
  return projectList.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectList.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F1E8]">
        <section className="container-custom py-12 sm:py-16">
          {/* Back button */}
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#77776F] transition-colors hover:text-[#C65D3A]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Project heading */}
          <div className="max-w-3xl">
            <p className="retro-label mb-3">
              {project.category}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#344E41] sm:text-5xl">
              {project.name}
              <span className="text-[#C65D3A]">.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#77776F] sm:text-base">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button"
              >
                <Globe size={16} />
                Live Website
                <ArrowUpRight size={15} />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.62 5.24-5.11 5.52.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                GitHub Repository
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Project screenshot */}
          <div className="mt-12 overflow-hidden border border-[#E7E0D3] bg-white p-2 sm:mt-16 sm:p-3">
            <Image
              src={project.image}
              alt={`${project.name} project screenshot`}
              width={1400}
              height={800}
              priority
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Project information */}
          <div className="mt-12 grid gap-10 border-t border-[#E7E0D3] pt-8 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="retro-label mb-2">
                About the project
              </p>
              <h2 className="text-2xl font-bold text-[#344E41]">
                Project Overview
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#77776F]">
                {project.description}
              </p>
            </div>

            <div>
              <p className="retro-label mb-2">
                Built with
              </p>
              <h2 className="text-2xl font-bold text-[#344E41]">
                Technologies
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-[#E7E0D3] bg-white px-4 py-2 text-xs font-medium text-[#344E41]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
