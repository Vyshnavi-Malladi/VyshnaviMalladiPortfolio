import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { navLinks, profile } from "@/constants/portfolio";
function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return <footer className="relative border-t border-border py-14">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary via-violet to-accent text-sm font-bold text-primary-foreground">
                {profile.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <span className="font-display text-base font-semibold">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {profile.role} building thoughtful, performant software from {profile.location}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Quick links
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => <button
    key={l.id}
    onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
    className="text-left text-sm text-muted-foreground transition-colors hover:text-accent"
  >
                  {l.label}
                </button>)}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Elsewhere
            </h3>
            <div className="mt-4 flex gap-3">
              {[
    { Icon: FaGithub, href: profile.socials.github, label: "GitHub" },
    { Icon: FaLinkedinIn, href: profile.socials.linkedin, label: "LinkedIn" },
  ].map(({ Icon, href, label }) => <a
    key={label}
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="glass grid size-11 place-items-center rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
  >
                  <Icon className="size-4" />
                </a>)}
            </div>
            <a
    href={`mailto:${profile.email}`}
    className="mt-5 inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
  >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {(/* @__PURE__ */ new Date()).getFullYear()} {profile.name}. Designed &amp; built from scratch.
          </p>
          <button
    onClick={toTop}
    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
  >
            <ArrowUp className="size-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};
