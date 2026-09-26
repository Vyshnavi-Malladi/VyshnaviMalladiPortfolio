import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { certifications } from "@/constants/portfolio";

function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-28 py-24 sm:py-32"
    >
      <div className="section-shell">

        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the code"
          description="Structured learning from the teams whose tools I build with every day."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.06}
              className="h-full"
            >
              <div
                className="
                  glass
                  group
                  flex
                  h-full
                  flex-col
                  rounded-3xl
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:shadow-[var(--shadow-glow)]
                "
              >

                {/* Certificate Badge */}
                <div
                  className="
                    relative
                    mb-6
                    grid
                    aspect-[16/9]
                    place-items-center
                    overflow-hidden
                    rounded-2xl
                    bg-gradient-to-br
                    from-primary/20
                    via-violet/15
                    to-accent/20
                  "
                >
                  <span
                    className="
                      font-display
                      text-2xl
                      font-bold
                      tracking-tight
                      text-foreground/70
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {c.badge}
                  </span>

                  <Award
                    className="
                      absolute
                      top-3
                      right-3
                      size-4
                      text-accent
                    "
                  />
                </div>

                {/* Certificate Title */}
                <h3 className="text-base leading-snug font-semibold">
                  {c.title}
                </h3>

                {/* Issuer */}
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {c.issuer}
                </p>

                {/* Date */}
                <p className="mt-1 text-xs text-muted-foreground/80">
                  {c.date}
                </p>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export {
  Certifications,
};
