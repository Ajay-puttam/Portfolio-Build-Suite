import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";

const PROJECTS = [
  {
    num: "01",
    title: "AI-Based Traffic Management System",
    description:
      "Adaptive traffic system optimizing 4-way signals using vehicle density, SUMO simulation, and live Pygame visualization.",
    tags: ["Python", "SUMO", "NumPy"],
    githubUrl: "https://github.com/Ajay-puttam/Traffic-Management-System",
  },
  {
    num: "02",
    title: "PDF Chatbot",
    description:
      "Upload any PDF and have a conversation with its contents using HuggingFace LLMs.",
    tags: ["HuggingFace", "Streamlit", "NLP"],
    githubUrl: "https://github.com/Ajay-puttam/pdf-chatbot",
  },
  {
    num: "03",
    title: "Internship Recommendation Engine",
    description:
      "Full-stack web app that recommends the top 5 internships to students using embeddings and FAISS.",
    tags: ["Python", "FAISS", "Next.js"],
    githubUrl: "https://github.com/Ajay-puttam/ai-internship-recommendation-engine",
  },
  {
    num: "04",
    title: "Blood Donor Matcher",
    description: "AI-powered blood donor matcher connecting urgent requests with nearby eligible donors.",
    tags: ["Python", "GeoLib", "Flask"],
    githubUrl: "https://github.com/Ajay-puttam/BloodConnect",
  },
];

function TechTag({ label }: { label: string }) {
  return (
    <span
      className="px-2 py-0.5 rounded text-xs"
      style={{
        fontFamily: "var(--app-font-mono)",
        backgroundColor: "rgba(245,166,35,0.12)",
        border: "1px solid rgba(245,166,35,0.25)",
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
            Tech Projects
          </p>
          <h2
            className="text-3xl sm:text-5xl font-extrabold"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Real problems. Real solutions.
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed max-w-2xl"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--text-secondary)",
              fontWeight: 300,
              marginTop: "4px",
            }}
          >
            A collection of projects shaped by curiosity, technical thinking, and practical application.
          </p>
        </motion.div>

        {/* Project list */}
        <div
          className="rounded-[14px] overflow-hidden"
          style={{ border: "1px solid var(--surface-border)" }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ backgroundColor: "var(--surface-border)" }}
          >
            {PROJECTS.map((project, i) => (
              <motion.a
                key={project.num}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col gap-4 p-8 md:p-10 transition-colors duration-500"
                style={{
                  backgroundColor: "var(--surface)",
                  borderLeft: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "rgba(255, 255, 255, 0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--surface)";
                }}
              >
                <div className="flex justify-between items-center">
                  <span
                    style={{
                      fontFamily: "var(--app-font-mono)",
                      fontSize: "11px",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.15em",
                      opacity: 0.6,
                    }}
                  >
                    {project.num}
                  </span>
                  <div className="flex gap-2 items-center">
                    <span
                      className="transition-colors duration-200 text-[var(--text-secondary)] group-hover:text-[#F5A623]"
                    >
                      <IconBrandGithub size={16} />
                    </span>
                    <span
                      className="transition-all duration-200 text-[var(--text-secondary)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#F5A623]"
                    >
                      <IconArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <h3
                  className="text-xl md:text-[26px] font-semibold leading-tight"
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
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} label={tag} />
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="https://github.com/Ajay-puttam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--surface-border)",
                color: "var(--text-secondary)",
                fontFamily: "var(--app-font-body)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "rgba(245,166,35,0.08)";
                el.style.borderColor = "rgba(245,166,35,0.35)";
                el.style.color = "#F5A623";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "var(--surface)";
                el.style.borderColor = "var(--surface-border)";
                el.style.color = "var(--text-secondary)";
              }}
            >
              <IconBrandGithub size={16} />
              View all on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
