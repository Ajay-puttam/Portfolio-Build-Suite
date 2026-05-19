import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const TOOL_GROUPS = [
  {
    label: "AI & GENERATIVE SYSTEMS",
    items: ["ChatGPT ImaGen", "Google Veo 3", "Google Flow", "ElevenLabs", "Hugging Face", "Sentence Transformers"],
  },
  {
    label: "VISUAL & CONTENT PRODUCTION",
    items: ["Canva", "Adobe Firefly", "PicsArt", "CapCut", "Alight Motion", "InShot"],
  },
  {
    label: "ENGINEERING & DEVELOPMENT",
    items: ["Python", "SQL", "Streamlit", "MERN", "GitHub", "JupyterLab", "Vercel"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Tools() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section
      id="tools"
      ref={ref}
      className="w-full py-28 px-6"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
            }}
          >
            Tools
          </p>
          <h2
            className="text-3xl font-extrabold sm:text-5xl"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Creative and technical stack.
          </h2>
          <p
            className="max-w-2xl text-sm leading-relaxed sm:text-base"
            style={{
              fontFamily: "var(--app-font-body)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            A mix of AI-native tools, creative software, and development frameworks that support how I design, build, experiment, and ship ideas.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TOOL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              custom={gi * 0.08}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              style={{
                borderRadius: "14px",
                border: "1px solid var(--surface-border)",
                backgroundColor: "var(--surface-card)",
                padding: "28px",
              }}
            >
              {/* Card Header */}
              <div className="flex flex-row items-center justify-between mb-7">
                <span
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  {group.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  0{gi + 1}
                </span>
              </div>

              {/* Tool List */}
              <ul className="space-y-3">
                {group.items.map((tool, index) => {
                  const isHovered = hoveredTool === tool;
                  const isLast = index === group.items.length - 1;

                  return (
                    <li
                      key={tool}
                      className="group flex flex-row items-center justify-between"
                      onMouseEnter={() => setHoveredTool(tool)}
                      onMouseLeave={() => setHoveredTool(null)}
                      style={{
                        borderBottom: isLast ? "none" : "1px solid var(--surface-border)",
                        paddingBottom: isLast ? "0" : "12px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "var(--app-font-body)",
                          color: isHovered ? "var(--brand)" : "var(--text-primary)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {tool}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--app-font-mono)",
                          fontSize: "11px",
                          color: isHovered ? "var(--text-secondary)" : "var(--text-muted)",
                          transition: "color 0.2s ease",
                        }}
                      >
                        →
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
