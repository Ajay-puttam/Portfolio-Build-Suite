import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ROLE_TAGS = [
  { label: "AI Visual Design", color: "var(--brand)" },
  { label: "Video Creation", color: "var(--brand-light)" },
  { label: "AI Systems", color: "var(--brand)" },
  { label: "Creative Technology", color: "var(--brand-light)" },
];

const TOOL_GROUPS = [
  { label: "VISUAL", tools: ["Canva", "Adobe Firefly", "CapCut"] },
  { label: "AI", tools: ["Hugging Face", "ElevenLabs"] },
  { label: "TECHNICAL", tools: ["Streamlit", "Python"] },
];

const STATS = [
  { value: "40K+", label: "Community Reach" },
  { value: "5M+", label: "Viral Content Views" },
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
      className="relative w-full py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Editorial background number */}
      <div
        className="pointer-events-none select-none absolute"
        aria-hidden
        style={{
          fontFamily: "var(--app-font-display)",
          fontSize: "clamp(140px, 16vw, 200px)",
          fontWeight: 700,
          color: "rgba(255,255,255,0.03)",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}
      >
        02
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">

        {/* ── LEFT COLUMN — 3/5 ── */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Metadata row */}
          <motion.p
            variants={itemVariants}
            className="text-[11px] tracking-[0.22em] uppercase"
            style={{
              fontFamily: "var(--app-font-mono)",
              color: "#F5A623",
              opacity: 0.75,
            }}
          >
            Creative Technologist · AI Visual Systems · Digital Storytelling
          </motion.p>

          {/* Section label */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              fontFamily: "var(--app-font-body)",
              color: "var(--brand)",
              letterSpacing: "0.2em",
              marginTop: "-12px",
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
              A builder of digital experiences.
            </span>
          </motion.h2>

          {/* Body paragraph 1 */}
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
            Final-year CSE student exploring the intersection of AI, visual systems, and digital
            storytelling. I led the graphic design & video editing team at DevCatalyst, built
            AI/NLP tools using{" "}
            <span style={{ color: "var(--brand-light)", fontWeight: 400 }}>Hugging Face</span> and
            Streamlit, and co-created Ammonium_Cyanide — a content platform reaching{" "}
            <span style={{ color: "var(--brand-light)", fontWeight: 400 }}>40K+</span> followers
            and <span style={{ color: "var(--brand-light)", fontWeight: 400 }}>5M+</span> views.
          </motion.p>

          {/* Body paragraph 2 */}
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
            I'm interested in the space where technical systems, visual storytelling, and internet
            culture overlap. That perspective shapes how I approach creative AI production —
            building experiences that are both functional and emotionally engaging.
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
                  className="text-[10px] tracking-[0.18em] uppercase"
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    color: "var(--text-muted)",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — 2/5 ── */}
        <motion.div
          className="lg:col-span-2 lg:pl-8 lg:border-l flex flex-col gap-5"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Portrait — editorial, cinematic */}
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
            <img
              src="/ajay-portrait.png"
              alt="Ajay Puttam"
              className="w-full h-full object-cover object-top"
              style={{
                filter: "saturate(0.82) contrast(0.96) brightness(0.95)",
              }}
            />
            {/* Bottom fade — blends into dark background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 55%, rgba(10,10,15,0.55) 80%, rgba(10,10,15,0.9) 100%)",
              }}
            />
            {/* Subtle left-edge vignette to match the image's own light */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent 70%, rgba(10,10,15,0.3) 100%)",
              }}
            />
          </div>

          <div
            className="rounded-2xl p-6 flex flex-col gap-6"
            style={{
              backgroundColor: "rgba(17, 17, 24, 0.7)",
              border: "1px solid var(--surface-border)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 0 40px rgba(245, 166, 35, 0.07), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Role tags */}
            <div>
              <p
                className="text-xs mb-3 tracking-widest uppercase"
                style={{
                  fontFamily: "var(--app-font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.18em",
                  fontSize: "10px",
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
                          ? "rgba(245, 166, 35, 0.15)"
                          : "rgba(247, 188, 88, 0.1)",
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

            {/* Tool groups */}
            <div className="flex flex-col gap-4">
              <p
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--app-font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.18em",
                  fontSize: "10px",
                }}
              >
                Tools
              </p>
              {TOOL_GROUPS.map(({ label, tools }) => (
                <div key={label}>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "var(--app-font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs"
                        style={{
                          fontFamily: "var(--app-font-mono)",
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
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
