
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Clubs from "@/components/Clubs";
import Footer from "@/components/Footer";
import { Mail, ArrowUpRight } from "lucide-react";
import Education from "@/components/Education";
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.24-5.1 5.51.4.35.76 1.03.76 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.04 18.34H5.07V9.03h2.97v9.31ZM6.55 7.76a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.4 10.58h-2.96v-4.53c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.61H9.8V9.03h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.55 1.97 3.55 4.53v5.01Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      

{/* ABOUT SECTION */}
<section
  id="about"
  className="w-full border-t border-[#E7E0D3] bg-[#F5F1E8] py-12 sm:py-14"
>
  <div className="container-custom grid gap-7 md:grid-cols-2 md:items-center md:gap-12">

    {/* Left Side */}
    <div className="flex flex-col justify-center">
      <p className="retro-label mb-2 text-[9px]">
        A Little About Me
      </p>

      <h2 className="max-w-md text-3xl leading-tight font-bold text-[#344E41] sm:text-4xl">
        Curiosity drives
        <span className="italic text-[#C65D3A]">
          {" "}everything.
        </span>
      </h2>

      <p className="mt-4 text-xs font-medium text-[#77776F]">
        Computer Science Student · Aspiring Frontend Developer
      </p>
    </div>

    {/* Right Side */}
    <div className="flex flex-col justify-center">
      <p className="text-sm leading-7 text-[#77776F]">
        I'm Mahin Mashrafe, a CSE undergraduate at International
        Islamic University Chittagong with a passion for web
        development and creating clean, user-friendly digital
        experiences.
      </p>

      <p className="mt-4 text-sm leading-7 text-[#77776F]">
        I enjoy learning new technologies, solving problems and
        collaborating with others. My involvement in student
        organizations has also strengthened my communication,
        teamwork and leadership skills.
      </p>

      {/* Interests */}
      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "Web Development",
          "Problem Solving",
          "Teamwork",
          "Continuous Learning",
        ].map((interest) => (
          <span
            key={interest}
            className="border border-[#E7E0D3] bg-white/60 px-3 py-1.5 text-[10px] font-medium text-[#344E41]"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>


      
{/* SKILLS SECTION */}
<section
  id="skills"
  className="w-full border-t border-[#E7E0D3] bg-[#F5F1E8] py-12 sm:py-14"
>
  <div className="container-custom">

    {/* Section Heading */}
    <div className="mb-7">
      <p className="retro-label mb-1 text-[9px]">
        My Expertise
      </p>

      <h2 className="text-2xl font-bold text-[#344E41] sm:text-3xl">
        Skills & Technologies
        <span className="text-[#C65D3A]">.</span>
      </h2>

      <p className="mt-1 text-xs text-[#77776F]">
        Technologies and tools I use to build things for the web.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">

      {/* Frontend Development */}
      <div className="border border-[#E7E0D3] bg-white/60 p-4">
        <h3 className="mb-4 text-xs font-bold text-[#344E41]">
          Frontend Development
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-html5-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">HTML</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-css3-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">CSS</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-javascript-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">JavaScript</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-typescript-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">TypeScript</span>
          </div>
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="border border-[#E7E0D3] bg-white/60 p-4">
        <h3 className="mb-4 text-xs font-bold text-[#344E41]">
          Frameworks & Libraries
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-react-original colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">React</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-nextjs-original text-3xl" />
            <span className="text-[10px] text-[#77776F]">Next.js</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-tailwindcss-original colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Backend & Database */}
      <div className="border border-[#E7E0D3] bg-white/60 p-4">
        <h3 className="mb-4 text-xs font-bold text-[#344E41]">
          Backend & Database
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-nodejs-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">Node.js</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-mysql-original colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">MySQL</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-mongodb-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">MongoDB</span>
          </div>
        </div>
      </div>

      {/* Development Tools */}
      <div className="border border-[#E7E0D3] bg-white/60 p-4">
        <h3 className="mb-4 text-xs font-bold text-[#344E41]">
          Development Tools
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-git-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">Git</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-github-original text-3xl" />
            <span className="text-[10px] text-[#77776F]">GitHub</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <i className="devicon-vscode-plain colored text-3xl" />
            <span className="text-[10px] text-[#77776F]">VS Code</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




      {/* EDUCATION SECTION */}
<Education />

      {/* PROJECTS SECTION */}
      <Projects />

      {/* CLUBS & LEADERSHIP SECTION */}
      <Clubs />

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="section-padding border-t border-[#E7E0D3]"
      >
        <div className="container-custom">
          <div className="border border-[#E7E0D3] bg-white p-6 sm:p-10 lg:p-12">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              {/* CONTACT INTRO */}
              <div>
                <p className="retro-label mb-3">Get in touch</p>

                <h2 className="max-w-xl text-3xl leading-tight font-bold text-[#344E41] sm:text-5xl">
                  Have an idea?
                  <span className="block italic text-[#C65D3A]">
                    Let's build it.
                  </span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#77776F]">
                  I'm always interested in connecting with people,
                  exploring opportunities and discussing creative ideas.
                  Feel free to reach out.
                </p>
              </div>

              {/* CONTACT LINKS */}
              <div className="flex flex-col gap-3">
                {/* EMAIL */}
                <a
                  href="mailto:mahin.mashrafe707@gmail.com"
                  className="group flex items-center justify-between border border-[#E7E0D3] p-4 transition-all hover:border-[#344E41] hover:bg-[#F5F1E8]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#F5F1E8] text-[#C65D3A] group-hover:bg-white">
                      <Mail size={19} />
                    </div>

                    <div>
                      <p className="text-xs text-[#77776F]">Email</p>
                      <p className="text-sm font-medium text-[#344E41]">
                        mahin.mashrafe707@gmail.com
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#77776F] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C65D3A]"
                  />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/mashrafe313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-[#E7E0D3] p-4 transition-all hover:border-[#344E41] hover:bg-[#F5F1E8]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#F5F1E8] text-[#C65D3A] group-hover:bg-white">
                      <LinkedInIcon />
                    </div>

                    <div>
                      <p className="text-xs text-[#77776F]">LinkedIn</p>
                      <p className="text-sm font-medium text-[#344E41]">
                        Connect with me
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#77776F] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C65D3A]"
                  />
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/mashrafe313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-[#E7E0D3] p-4 transition-all hover:border-[#344E41] hover:bg-[#F5F1E8]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#F5F1E8] text-[#C65D3A] group-hover:bg-white">
                      <GithubIcon />
                    </div>

                    <div>
                      <p className="text-xs text-[#77776F]">GitHub</p>
                      <p className="text-sm font-medium text-[#344E41]">
                        Explore my projects
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#77776F] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C65D3A]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
