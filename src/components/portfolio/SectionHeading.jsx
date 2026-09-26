import { Reveal } from "./Reveal";
function SectionHeading({
  eyebrow,
  title,
  description
}) {
  return <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          <span className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-semibold text-balance sm:text-5xl">{title}</h2>
      </Reveal>
      {description ? <Reveal delay={0.14}>
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted-foreground">
            {description}
          </p>
        </Reveal> : null}
    </div>;
}
export {
  SectionHeading
};
