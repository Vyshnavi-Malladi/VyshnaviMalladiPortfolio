import { GraduationCap, Target, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { stats, timeline } from "@/constants/portfolio";
import { useCountUp } from "@/hooks/use-count-up";
function StatCard({
  value,
  label,
  suffix,
  index
}) {
  const { ref, value: current } = useCountUp(value);
  return <Reveal delay={index * 0.08}>
      <div className="glass group rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-primary/40">
        <span ref={ref} className="text-gradient block text-4xl font-semibold">
          {current}
          {suffix}
        </span>
        <span className="mt-2 block text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {label}
        </span>
      </div>
    </Reveal>;
}
const icons = [GraduationCap, GraduationCap, Target];
function About() {
  return <section id="about" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
    eyebrow="About me"
    title="Engineering with intent, learning without pause"
    description="A recent B.Tech graduate in Artificial Intelligence & Machine Learning with hands-on MERN stack and ML experience."
  />

        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <Reveal direction="left">
              <div className="glass rounded-3xl p-8">
                <Sparkles className="size-6 text-accent" />
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  I build full-stack products end to end — from schema design and REST API
                  architecture to responsive, reusable React interfaces. My work sits at the
                  intersection of applied machine learning and modern web engineering, most recently
                  on a smart agriculture platform and a career guidance product.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  I&apos;m passionate about building scalable software, solving real-world problems,
                  and contributing to innovative engineering teams — bringing problem solving,
                  communication and leadership to every project I join.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-primary via-violet to-transparent" />
            <div className="space-y-6">
              {timeline.map((item, i) => {
    const Icon = icons[i] ?? Target;
    return <Reveal key={item.title} direction="right" delay={i * 0.1}>
                    <div className="relative pl-14">
                      <span className="glass absolute top-1 left-0 grid size-10 place-items-center rounded-2xl text-accent">
                        <Icon className="size-4" />
                      </span>
                      <div className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-accent/40">
                        <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium tracking-wide text-accent uppercase">
                          {item.period}
                        </span>
                        <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm font-medium text-foreground/80">{item.org}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </Reveal>;
  })}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
export {
  About
};
