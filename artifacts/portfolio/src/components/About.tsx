import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ROLE_TAGS = [
  { label: "AI Visual Designer", color: "var(--brand)" },
  { label: "Video Creator", color: "var(--brand-light)" },
  { label: "NLP Builder", color: "var(--brand)" },
  { label: "Content Strategist", color: "var(--brand-light)" },
  { label: "Creative Lead", color: "var(--brand)" },
];

const TOOLS = [
  "Canva",
  "CapCut",
  "Adobe Firefly",
  "Streamlit",
  "HuggingFace",
  "ElevenLabs",
];

const STATS = [
  { value: "40K+", label: "Followers" },
  { value: "5M+", label: "Views" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full py-28 px-6"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
        {/* Left column — 3/5 */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
            }}
          >
            About me
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{
              fontFamily: "var(--app-font-display)",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Not just an engineer.{" "}
            <span style={{ color: "var(--brand-light)" }}>
              A builder of experiences.
            </span>
          </motion.h2>

          {/* Body paragraphs */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed"
            style={{
              fontFamily: "var(--app-font-body)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            Final-year CSE student who lives at the crossroads of code, design,
            and culture. I've led the graphic design & video editing team at
            DevCatalyst, shipped AI/NLP projects, and co-run{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 400 }}>
              Ammonium_Cyanide
            </span>{" "}
            — a meme page with 40K+ followers and 5M+ viral views — understanding
            what makes content actually hit.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed"
            style={{
              fontFamily: "var(--app-font-body)",
              fontWeight: 300,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            I think in systems, feel in aesthetics, and understand virality from
            the inside. That's the combination that makes me unusually useful for
            creative AI production — I don't just build the tool, I understand
            why people will care about it.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-4 mt-2">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-1 px-5 py-4 rounded-xl"
                style={{
                  backgroundColor: "var(--surface-card)",
                  border: "1px solid var(--surface-border)",
                  boxShadow: "0 0 24px rgba(245, 166, 35, 0.08) inset",
                }}
              >
                <span
                  className="text-2xl font-extrabold"
                  style={{
                    fontFamily: "var(--app-font-display)",
                    color: "var(--brand-light)",
                  }}
                >
                  {value}
                </span>
                <span
                  className="text-xs tracking-wide uppercase"
                  style={{
                    fontFamily: "var(--app-font-body)",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — 2/5 */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="rounded-2xl p-6 flex flex-col gap-6"
            style={{
              backgroundColor: "rgba(19, 18, 9, 0.8)",
              border: "1px solid var(--surface-border)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 0 40px rgba(245, 166, 35, 0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Role tags */}
            <div>
              <p
                className="text-xs mb-3 tracking-widest uppercase"
                style={{
                  fontFamily: "var(--app-font-body)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.18em",
                }}
              >
                Roles
              </p>
              <div className="flex flex-wrap gap-2">
                {ROLE_TAGS.map(({ label, color }, i) => (
                  <span
                    key={label}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      fontFamily: "var(--app-font-body)",
                      backgroundColor:
                        i % 2 === 0
                          ? "rgba(245, 166, 35, 0.12)"
                          : "rgba(255, 202, 107, 0.08)",
                      border: `1px solid ${color}40`,
                      color: color,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "var(--surface-border)" }} />

            {/* Tool tags */}
            <div>
              <p
                className="text-xs mb-3 tracking-widest uppercase"
                style={{
                  fontFamily: "var(--app-font-body)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.18em",
                }}
              >
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs"
                    style={{
                      fontFamily: "monospace",
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--surface-border)",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
