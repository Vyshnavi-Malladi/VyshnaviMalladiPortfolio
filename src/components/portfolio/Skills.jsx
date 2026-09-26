import { motion } from "framer-motion";
import { Brain, Code2, Database, LayoutGrid, Server, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skillGroups } from "@/constants/portfolio";
const iconMap = {
  code: Code2,
  layout: LayoutGrid,
  server: Server,
  database: Database,
  brain: Brain,
  tool: Wrench
};
function Skills() {
  return <section id="skills" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
    eyebrow="Skills"
    title="A toolkit tuned for shipping"
    description="Languages, frameworks and tooling I use daily to take an idea from whiteboard to deployed product."
  />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
    const Icon = iconMap[group.icon] ?? Code2;
    return <Reveal key={group.category} delay={gi * 0.07}>
                <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="glass group h-full rounded-3xl p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]"
    >
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-semibold">{group.category}</h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((s) => <span
      key={s.name}
      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium text-muted-foreground"
    >
                        {s.name}
                      </span>)}
                  </div>

                  <div className="mt-6 space-y-4">
                    {group.skills.map((skill, i) => <div key={skill.name}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                          <motion.div
      className="h-full rounded-full bg-gradient-to-r from-primary via-violet to-accent"
      initial={{ width: 0 }}
      whileInView={{ width: `${skill.level}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
    />
                        </div>
                      </div>)}
                  </div>
                </motion.div>
              </Reveal>;
  })}
        </div>
      </div>
    </section>;
}
export {
  Skills
};
