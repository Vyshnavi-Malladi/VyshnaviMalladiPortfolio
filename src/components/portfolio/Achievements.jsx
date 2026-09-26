import { Award, Medal, Shield, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { achievements } from "@/constants/portfolio";
const iconMap = {
  award: Award,
  star: Star,
  medal: Medal,
  shield: Shield
};
function Achievements() {
  return <section id="achievements" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
    eyebrow="Achievements"
    title="Consistency, measured"
    description="Academic results and industry certifications that reflect how I work — thoroughly, and to a standard."
  />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
    const Icon = iconMap[a.icon] ?? Award;
    return <Reveal key={a.title} delay={i * 0.07} className="h-full">
                <div className="glass group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm font-medium text-foreground/80">{a.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
                </div>
              </Reveal>;
  })}
        </div>
      </div>
    </section>;
}
export {
  Achievements
};
