import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import portrait from "@/assets/Vyshu pic.png";
import { profile } from "@/constants/portfolio";

const roles = ["AI & Full Stack Developer", "MERN Stack Engineer", "Machine Learning Enthusiast"];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const speed = deleting ? 40 : 85;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1600);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className="text-gradient font-display">
      {text}
      <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-[2px] bg-accent align-middle text-transparent">
        |
      </span>
    </span>
  );
}

function Hero() {
  // Replace the resume URL with your Google Drive link
  const resumeUrl = "https://drive.google.com/file/d/1oNw4AtEj_vEXH3I3ZCWHnmGBXiYiL1Zk/view?usp=sharing";

  return (
    <section id="home" className="relative flex min-h-svh items-center pt-32 pb-20">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Available for full-time roles &amp; internships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 text-5xl leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <Typewriter />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-violet to-primary bg-[length:200%_100%] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:bg-[position:100%_0] hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:ring-1 hover:ring-accent/50"
            >
              <FolderGit2 className="size-4 text-accent" />
              View Projects
            </button>
            <div className="flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="glass grid size-12 place-items-center rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                <FaGithub className="size-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="glass grid size-12 place-items-center rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                <FaLinkedinIn className="size-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase"
          >
            <ArrowDown className="size-4 animate-bounce text-accent" />
            Scroll to explore
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative">
            {/* Clean, rounded portrait */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src={portrait}
                alt={`${profile.name}, ${profile.role}`}
                width={912}
                height={1104}
                className="h-full w-full object-cover"
              />

              {/* Minimal bottom gradient for badge legibility */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Role badge — minimal, clean */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 px-4 pb-5 text-xs font-medium text-white/90">
                <span className="size-1.5 rounded-full bg-success" />
                {profile.role}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Hero };