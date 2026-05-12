import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    num: "01",
    title: "AI Traffic Management System",
    description:
      "Adaptive signal control using computer vision and real-time data processing.",
    tags: ["Python", "OpenCV", "AI"],
    icon: "🚦",
  },
  {
    num: "02",
    title: "PDF Chatbot",
    description:
      "Upload any PDF and have a conversation with its contents using HuggingFace LLMs.",
    tags: ["HuggingFace", "Streamlit", "NLP"],
    icon: "💬",
  },
  {
    num: "03",
    title: "Internship Recommendation Engine",
    description:
      "Matches students to internships based on skills and preferences using ML scoring.",
    tags: ["Python", "ML", "Streamlit"],
    icon: "🎯",
  },
  {
    num: "04",
    title: "AI PDF Summarizer",
    description: "Instant intelligent summaries of long documents.",
    tags: ["LLM", "NLP", "Python"],
    icon: "📄",
  },
  {
    num: "05",
    title: "Blood Donor Matcher",
    description: "Real-time matching system between donors and recipients.",
    tags: ["Python", "Backend"],
    icon: "🩸",
  },
];

function TechTag({ label }: { label: string }) {
  return (
    <span
      className="px-2 py-0.5 rounded text-xs"
      style={{
        fontFamily: "monospace",
        backgroundColor: "rgba(124,58,237,0.12)",
        border: "1px solid rgba(124,58,237,0.25)",
        color: "var(--brand-light)",
      }}
    >
      {label}
    </span>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full py-28 px-6"
      style={{ backgroundColor: "var(--surface-card)" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
            }}
          >
            Built with AI
          </p>
          <h2
            className="text-3xl sm:text-5xl font-extrabold"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Where code meets intelligence.
          </h2>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{
                duration: 0.55,
                delay: i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex items-center gap-5 p-5 sm:p-6 rounded-xl overflow-hidden group transition-all duration-300"
              style={{
                backgroundColor: "var(--surface)",
                borderLeft: "4px solid var(--brand)",
                border: "1px solid var(--surface-border)",
                borderLeftWidth: "4px",
                borderLeftColor: "var(--brand)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 30px rgba(124,58,237,0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.4)";
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "var(--brand)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--surface-border)";
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "var(--brand)";
              }}
            >
              {/* Decorative number */}
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none"
                style={{
                  fontFamily: "var(--app-font-display)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  opacity: 0.06,
                  lineHeight: 1,
                }}
                aria-hidden
              >
                {project.num}
              </span>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-2 pl-2 z-10">
                <h3
                  className="text-base sm:text-lg font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--app-font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--app-font-body)",
                    color: "var(--text-secondary)",
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
              </div>

              {/* Right: icon + link */}
              <div className="flex flex-col items-center gap-3 flex-shrink-0 z-10">
                <span className="text-2xl" role="img" aria-label={project.title}>
                  {project.icon}
                </span>
                <a
                  href="#projects"
                  className="text-xs px-3 py-1.5 rounded-lg transition-all duration-200 font-medium"
                  style={{
                    fontFamily: "var(--app-font-body)",
                    backgroundColor: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "var(--brand-light)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      "rgba(124,58,237,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      "rgba(124,58,237,0.12)";
                  }}
                >
                  GitHub ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
