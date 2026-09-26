import { useEffect, useState } from "react";
function AmbientBackground() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.2 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(
        () => setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
      );
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="animate-blob absolute -top-40 -left-32 size-[38rem] rounded-full bg-primary/25 blur-[120px]" />
      <div
    className="animate-blob absolute top-1/3 -right-40 size-[34rem] rounded-full bg-violet/25 blur-[130px]"
    style={{ animationDelay: "-6s" }}
  />
      <div
    className="animate-blob absolute bottom-0 left-1/3 size-[30rem] rounded-full bg-accent/18 blur-[140px]"
    style={{ animationDelay: "-12s" }}
  />
      <div
    className="absolute inset-0 opacity-[0.35]"
    style={{
      backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)",
      backgroundSize: "64px 64px",
      maskImage: "radial-gradient(90% 60% at 50% 0%, black, transparent)"
    }}
  />
      <div
    className="absolute inset-0 transition-opacity duration-500"
    style={{
      background: `radial-gradient(500px circle at ${pos.x * 100}% ${pos.y * 100}%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 70%)`
    }}
  />
    </div>;
}
export {
  AmbientBackground
};
