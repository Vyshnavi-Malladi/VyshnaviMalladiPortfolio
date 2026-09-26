import { Download, Eye, FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile } from "@/constants/portfolio";

function ResumeSection() {
  // Replace the resume URL with your Google Drive link
  const resumeUrl = "https://drive.google.com/file/d/1oNw4AtEj_vEXH3I3ZCWHnmGBXiYiL1Zk/view?usp=sharing";

  return (
    <section id="resume" className="scroll-mt-28 py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-10 sm:p-14">
            <div className="absolute -top-24 -right-16 size-64 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  <FileText className="size-3.5 text-accent" /> Resume
                </span>
                <h2 className="mt-6 text-4xl font-semibold text-balance sm:text-5xl">
                  One page. <span className="text-gradient">Everything that matters.</span>
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                  A recruiter-friendly résumé covering my education, internship experience,
                  projects, certifications and technical stack.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-violet px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Download className="size-4" /> Download Resume
                  </a>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Eye className="size-4 text-accent" /> View Resume
                  </a>
                </div>
              </div>

              <div className="glass mx-auto w-full max-w-xs rotate-2 rounded-2xl p-5 transition-transform duration-500 hover:rotate-0">
                <div className="space-y-2">
                  <div className="h-3 w-2/3 rounded-full bg-foreground/25" />
                  <div className="h-2 w-1/2 rounded-full bg-foreground/15" />
                </div>
                <div className="mt-5 space-y-2">
                  {[100, 88, 94, 70, 82, 60].map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full bg-foreground/10"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
                <div className="mt-5 h-2 w-1/3 rounded-full bg-accent/60" />
                <div className="mt-3 space-y-2">
                  {[92, 76, 88, 64].map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full bg-foreground/10"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { ResumeSection };