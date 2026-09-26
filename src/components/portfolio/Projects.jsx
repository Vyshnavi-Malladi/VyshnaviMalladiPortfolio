import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects } from "@/constants/portfolio";

function TiltCard({ project }) {
  const [tilt, setTilt] = useState({
    rx: 0,
    ry: 0,
  });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rx: -y * 6,
      ry: x * 8,
    });
  };

  /* =================================================
     PROJECT DESCRIPTIONS
  ================================================= */

  const projectDescriptions = {
    farmxpert:
      "A smart agriculture platform that helps farmers make better crop decisions using machine learning and deep learning. It provides crop recommendations, crop disease detection, weather forecasting, soil testing center locations, crop tracking, and fertilizer recommendations.",

    "skill-gap-navigator":
      "A career guidance platform that helps users identify skill gaps and plan their career journey. It includes resume analysis, personalized learning roadmaps, interview preparation, job tracking, secure authentication, and responsive user dashboards.",
  };

  const getDescription = () => {
    if (project.description) {
      return project.description;
    }

    if (projectDescriptions[project.slug]) {
      return projectDescriptions[project.slug];
    }

    const title = project.title?.toLowerCase() || "";

    if (title.includes("farmxpert")) {
      return projectDescriptions.farmxpert;
    }

    if (title.includes("skill gap")) {
      return projectDescriptions["skill-gap-navigator"];
    }

    return project.summary || "";
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() =>
        setTilt({
          rx: 0,
          ry: 0,
        })
      }
      style={{
        transform: `
          perspective(1000px)
          rotateX(${tilt.rx}deg)
          rotateY(${tilt.ry}deg)
        `,
        transformStyle: "preserve-3d",
      }}
      className="
        glass
        group
        h-full
        overflow-hidden
        rounded-3xl
        transition-[transform,box-shadow]
        duration-300
        hover:shadow-[var(--shadow-glow)]
      "
    >

      {/* =================================================
          PROJECT IMAGE
      ================================================= */}

      <div className="relative h-44 sm:h-48 overflow-hidden">

        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          width={1200}
          height={600}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-card
            via-card/20
            to-transparent
            opacity-80
          "
        />

      </div>

      {/* =================================================
          PROJECT INFORMATION
      ================================================= */}

      <div className="p-6">

        {/* Project title */}

        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>

        {/* Project description */}

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-muted-foreground
          "
        >
          {getDescription()}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <div className="mt-5 flex flex-wrap gap-2">

          {project.tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full
                border
                border-border
                bg-secondary/60
                px-3
                py-1
                text-[11px]
                font-medium
                text-muted-foreground
              "
            >
              {t}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 py-24 sm:py-32"
    >
      <div className="section-shell">

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects I've Built"
          description="A selection of projects focused on full-stack development, machine learning, and solving real-world problems."
        />

        {/* =================================================
            PROJECT CARDS
        ================================================= */}

        <div className="grid gap-7 md:grid-cols-2">

          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.07}
              className="h-full"
            >
              <TiltCard project={project} />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}

export {
  Projects,
};dir /a .git