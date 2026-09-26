import { useEffect, useState } from "react";
function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target;
      setActive(Boolean(el?.closest("a, button, [data-cursor='hover']")));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  if (!enabled) return null;
  return <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      <div
    className="absolute size-2 rounded-full bg-accent transition-transform duration-100"
    style={{ transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)` }}
  />
      <div
    className="absolute rounded-full border border-primary/60 transition-[width,height,transform,opacity] duration-200 ease-out"
    style={{
      width: active ? 48 : 30,
      height: active ? 48 : 30,
      opacity: active ? 1 : 0.6,
      transform: `translate3d(${pos.x - (active ? 24 : 15)}px, ${pos.y - (active ? 24 : 15)}px, 0)`
    }}
  />
    </div>;
}
export {
  CustomCursor
};
