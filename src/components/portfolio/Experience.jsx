import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience } from "@/constants/portfolio";
function Experience() {
  return <section id="experience" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
    eyebrow="Experience"
    title="Internships, training and leadership"
    description="Where I've applied engineering in real teams, with real deadlines and real users."
  />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary via-violet to-transparent md:left-1/2" />
          <div className="space-y-10">
            {experience.map((item, i) => <Reveal key={item.role} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.06}>
                <div
    className={`relative pl-16 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
  >
                  <span
    className={`glass absolute top-6 left-0 grid size-12 place-items-center rounded-2xl text-xs font-bold text-accent md:top-6 ${i % 2 === 0 ? "md:-right-6 md:left-auto" : "md:-left-6"}`}
  >
                    {item.logo}
                  </span>
                  <div className="glass rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
                        {item.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm font-medium text-foreground/80">{item.org}</p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((p) => <li
    key={p}
    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
  >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          {p}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </Reveal>)}
          </div>
        </div>
      </div>
    </section>;
}
export {
  Experience
};
