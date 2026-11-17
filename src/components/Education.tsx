
const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    period: "2024 – Present",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Cantonment College, Cumilla",
    period: "2021 – 2022",
  },
  {
    degree: "Dakhil",
    institution: "Tahjibul Ummah Dakhil Madrasah",
    period: "2019 – 2020",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-[#E7E0D3] py-12 sm:py-14"
    >
      <div className="container-custom">
        <div className="mb-5">
          <p className="retro-label mb-1">Academic Background</p>
          <h2 className="text-2xl font-bold text-[#344E41] sm:text-3xl">
            Education<span className="text-[#C65D3A]">.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {education.map((item) => (
            <article
              key={item.degree}
              className="flex flex-col justify-between gap-2 border border-[#E7E0D3] bg-white px-4 py-3 transition-all duration-300 hover:border-[#C65D3A] sm:flex-row sm:items-center sm:px-5"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#344E41] sm:text-base">
                  {item.degree}
                </h3>
                <p className="mt-0.5 text-xs text-[#77776F]">
                  {item.institution}
                </p>
              </div>

              <span className="shrink-0 text-[11px] font-medium text-[#C65D3A]">
                {item.period}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
