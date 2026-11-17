
import Image from "next/image";

const organizations = [
  {
    name: "IIUC Computer Club",
    role: "Press and Publication Secretary",
    image: "/images/clubs/iiuc-computer-club.jpg",
  },
  {
    name: "Red Crescent Youth, IIUC Unit",
    role: "Departmental Leader — Administration, Organizing and Recruitment",
    image: "/images/clubs/red-crescent-youth.jpg",
  },
  {
    name: "Selfless Organisation BD – CTG",
    role: "Finance Secretary",
    image: "/images/clubs/selfless-organisation-bd.jpg",
  },
  {
    name: "IIUC Cumilla Students Welfare Association",
    role: "Departmental Representative",
    image: "/images/clubs/iiuc-cumilla-students-forum.jpg",
  },
];

export default function Clubs() {
  return (
    <section
      id="leadership"
      className="section-padding border-t border-[#E7E0D3]"
    >
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-7">
          <p className="retro-label mb-2">Campus & Community</p>

          <h2 className="text-3xl font-bold text-[#344E41] sm:text-4xl">
            Beyond the code
            <span className="text-[#C65D3A]">.</span>
          </h2>

          <p className="mt-2 max-w-lg text-[13px] leading-6 text-[#77776F]">
            Leadership, collaboration and community involvement
            beyond my technical journey.
          </p>
        </div>

        {/* Organization Cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {organizations.map((organization) => (
            <article
              key={organization.name}
              className="flex items-start gap-4 border border-[#E7E0D3] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
            >
              {/* Organization Logo */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border border-[#E7E0D3] bg-white p-1.5">
                <Image
                  src={organization.image}
                  alt={`${organization.name} logo`}
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>

              {/* Organization Details */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#C65D3A]">
                    Current
                  </span>
                </div>

                <h3 className="text-sm font-bold leading-snug text-[#344E41]">
                  {organization.name}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-[#77776F]">
                  {organization.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
