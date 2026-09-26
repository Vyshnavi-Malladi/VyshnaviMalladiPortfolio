import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Command } from "lucide-react";
import { navLinks, profile } from "@/constants/portfolio";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
function Navbar({ onOpenPalette }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.05, 0.3, 0.6] }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return <header
    className={cn(
      "fixed inset-x-0 top-0 z-[60] transition-all duration-300",
      scrolled ? "py-3" : "py-5"
    )}
  >
      <nav className="section-shell">
        <div
    className={cn(
      "flex items-center justify-between rounded-3xl px-4 py-3 transition-all duration-300 sm:px-6",
      scrolled ? "glass" : "border border-transparent"
    )}
  >
          <button
    onClick={() => go("home")}
    className="group flex items-center gap-3"
    aria-label="Go to top"
  >
            <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary via-violet to-accent text-sm font-bold text-primary-foreground shadow-lg transition-transform duration-300 group-hover:rotate-6">
              {profile.name.split(" ").map((n) => n[0]).join("")}
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              {profile.name}
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => <button
    key={link.id}
    onClick={() => go(link.id)}
    className={cn(
      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
      activeId === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    )}
  >
                {activeId === link.id && <motion.span
    layoutId="nav-pill"
    className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
    transition={{ type: "spring", stiffness: 350, damping: 30 }}
  />}
                <span className="relative">{link.label}</span>
              </button>)}
          </div>

          <div className="flex items-center gap-2">
            <button
    onClick={onOpenPalette}
    className="glass hidden items-center gap-2 rounded-full px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
    aria-label="Open command palette"
  >
              <Command className="size-3.5" />
              <span>Search</span>
              <kbd className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium">⌘K</kbd>
            </button>
            <button
    onClick={toggle}
    aria-label="Toggle theme"
    className="glass grid size-9 place-items-center rounded-full transition-transform duration-300 hover:scale-105"
  >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
    key={theme}
    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
    animate={{ rotate: 0, opacity: 1, scale: 1 }}
    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
    transition={{ duration: 0.25 }}
  >
                  {theme === "dark" ? <Sun className="size-4 text-accent" /> : <Moon className="size-4 text-primary" />}
                </motion.span>
              </AnimatePresence>
            </button>
            <button
    onClick={() => setOpen((v) => !v)}
    aria-label="Toggle menu"
    aria-expanded={open}
    className="glass grid size-9 place-items-center rounded-full lg:hidden"
  >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && <motion.div
    initial={{ opacity: 0, y: -12, height: 0 }}
    animate={{ opacity: 1, y: 0, height: "auto" }}
    exit={{ opacity: 0, y: -12, height: 0 }}
    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    className="overflow-hidden lg:hidden"
  >
              <div className="glass mt-2 grid gap-1 rounded-3xl p-3">
                {navLinks.map((link, i) => <motion.button
    key={link.id}
    onClick={() => go(link.id)}
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: i * 0.04 }}
    className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
  >
                    {link.label}
                  </motion.button>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>
    </header>;
}
export {
  Navbar
};
