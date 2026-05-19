import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.55,
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const SKILL_PILLS = [
  "AI Visual Systems",
  "Video Editing",
  "",
  "Digital Storytelling",
  "Creative Technology",
  "AI Tooling",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-stretch w-full">

        {/* ── LEFT COLUMN — existing content, untouched ── */}
        <div className="flex flex-col items-start text-left px-6 md:pl-[80px] md:w-[55%] py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 w-full"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                style={{
                  fontFamily: "var(--app-font-body)",
                  backgroundColor: "rgba(245, 166, 35, 0.12)",
                  border: "1px solid rgba(245, 166, 35, 0.35)",
                  color: "var(--brand-light)",
                  letterSpacing: "0.1em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "var(--brand-light)",
                    animation: "glowPulse 3s ease-in-out infinite",
                  }}
                />
                Open to Work · Creative & Tech Roles
              </span>
            </motion.div>

            {/* Label */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "#F5A623", marginBottom: "-8px" }}
            >
              CREATIVE TECHNOLOGIST
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-left"
              style={{
                fontFamily: "var(--app-font-display)",
                fontSize: "clamp(42px, 7vw, 76px)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                fontWeight: 600,
                color: "#F0F0EC",
              }}
            >
              I build at the
              <br />
              intersection of
              <br />
              <span style={{ color: "#F5A623" }}>AI,</span>{" "}
              <span style={{ color: "#F5A623" }}>design</span>
              <span style={{ color: "#F0F0EC" }}> +</span>{" "}
              <span style={{ color: "#F5A623" }}>culture.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg sm:text-xl"
              style={{
                fontFamily: "var(--app-font-body)",
                fontWeight: 300,
                color: "var(--text-secondary)",
                lineHeight: 1.65,
              }}
            >
              Final Year CSE. Matrusri Engineering College. Hyderabad.{" "}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-2"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-[#F5A623] text-[#F5A623] bg-transparent hover:bg-[#F5A623] hover:text-[#0A0A0A]"
                style={{ fontFamily: "var(--app-font-body)" }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-[rgba(255,255,255,0.12)] text-[#666664] bg-transparent hover:border-[rgba(255,255,255,0.3)] hover:text-[#F0F0EC]"
                style={{ fontFamily: "var(--app-font-body)" }}
              >
                Contact Me
                <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.p
              variants={itemVariants}
              className="text-xs tracking-wide"
              style={{
                fontFamily: "var(--app-font-body)",
                color: "var(--text-muted)",
              }}
            >
              DevCatalyst Creative Lead
              <span style={{ color: "rgba(245,166,35,0.5)", margin: "0 6px" }}>·</span>
              40K+ Audience Reach
              <span style={{ color: "rgba(245,166,35,0.5)", margin: "0 6px" }}>·</span>
              AI Projects
              <span style={{ color: "rgba(245,166,35,0.5)", margin: "0 6px" }}>·</span>
              Hyderabad
            </motion.p>
          </motion.div>
        </div>

        {/* ── DIVIDER — desktop only ── */}
        <div
          className="hidden md:block w-px self-stretch flex-shrink-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #2A2A28 50%, transparent 100%)",
            opacity: 0.45,
          }}
        />

        {/* ── RIGHT COLUMN — editorial composition, desktop only ── */}
        <div className="hidden md:flex flex-col relative flex-1 pl-10 pr-[80px] py-24 justify-center overflow-hidden">

          {/* Ambient atmosphere */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {/* Soft amber radial */}
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "20%",
                width: "320px",
                height: "320px",
                background:
                  "radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)",
                filter: "blur(50px)",
                transform: "translateY(-50%)",
              }}
            />
            {/* Cool deep layer */}
            <div
              style={{
                position: "absolute",
                bottom: "20%",
                right: "0%",
                width: "200px",
                height: "200px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.015) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
          </div>

          {/* "SYSTEMS" background typography fragment */}
          <div
            className="pointer-events-none select-none absolute"
            aria-hidden
            style={{
              fontFamily: "var(--app-font-display)",
              fontSize: "clamp(160px, 18vw, 230px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "rgba(255,255,255,0.025)",
              top: "50%",
              left: "-24px",
              transform: "translateY(-50%)",
              lineHeight: 1,
              userSelect: "none",
              filter: "blur(0.5px)",
              whiteSpace: "nowrap",
            }}
          >
            SYSTEMS
          </div>

          {/* Stat cards + pills */}
          <motion.div
            variants={rightContainerVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col"
            style={{ gap: "12px" }}
          >
            {/* Card 1 — COMMUNITY */}
            <motion.div variants={rightItemVariants} style={{ transform: "translateX(0px)" }}>
              <div
                className="rounded-2xl px-5 py-4 backdrop-blur-sm"
                style={{
                  maxWidth: "210px",
                  background: "rgba(17,17,16,0.7)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(245,166,35,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.05)";
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "#444440",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  COMMUNITY
                </p>
                <p
                  style={{
                    fontFamily: "var(--app-font-display)",
                    fontSize: "34px",
                    fontWeight: 600,
                    color: "#F5A623",
                    lineHeight: 1.1,
                  }}
                >
                  40K+
                </p>
                <p
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "10px",
                    color: "#444440",
                    marginTop: "2px",
                  }}
                >
                  audience reach
                </p>
              </div>
            </motion.div>

            {/* Card 2 — CONTENT */}
            <motion.div variants={rightItemVariants} style={{ transform: "translateX(40px)" }}>
              <div
                className="rounded-2xl px-5 py-4 backdrop-blur-sm"
                style={{
                  maxWidth: "210px",
                  background: "rgba(17,17,16,0.7)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(245,166,35,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.05)";
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "#444440",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  VIRAL CONTENT
                </p>
                <p
                  style={{
                    fontFamily: "var(--app-font-display)",
                    fontSize: "34px",
                    fontWeight: 600,
                    color: "#F0F0EC",
                    lineHeight: 1.1,
                  }}
                >
                  32+
                </p>
                <p
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "10px",
                    color: "#444440",
                    marginTop: "2px",
                  }}
                >
                  1M+ views · viral reels on Ammonium Cyanide page
                </p>
              </div>
            </motion.div>

            {/* Card 3 — SYSTEMS */}
            <motion.div variants={rightItemVariants} style={{ transform: "translateX(18px)" }}>
              <div
                className="rounded-2xl px-5 py-4 backdrop-blur-sm"
                style={{
                  maxWidth: "210px",
                  background: "rgba(17,17,16,0.7)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(245,166,35,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.05)";
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "#444440",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  SYSTEMS
                </p>
                <p
                  style={{
                    fontFamily: "var(--app-font-display)",
                    fontSize: "34px",
                    fontWeight: 600,
                    color: "#F0F0EC",
                    lineHeight: 1.1,
                  }}
                >
                  AI
                </p>
                <p
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "10px",
                    color: "#444440",
                    marginTop: "2px",
                  }}
                >
                  design + storytelling
                </p>
              </div>
            </motion.div>

            {/* Skill pills */}
            <motion.div
              variants={rightItemVariants}
              className="flex flex-wrap mt-5"
              style={{ gap: "8px", transform: "translateX(4px)" }}
            >
              {SKILL_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "var(--app-font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#555550",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor =
                      "rgba(245,166,35,0.2)";
                    (e.currentTarget as HTMLSpanElement).style.color = "#777770";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLSpanElement).style.color = "#555550";
                  }}
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right: scroll to explore (vertical text) */}
      <div
        className="absolute bottom-10 right-8 hidden md:block pointer-events-none"
        style={{ writingMode: "vertical-rl", fontFamily: "monospace" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#2A2A28" }}>
          scroll to explore
        </span>
      </div>

      {/* Bottom-left: availability */}
      <div className="absolute bottom-10 left-6 md:left-[80px] hidden md:block pointer-events-none">
        <p
          className="font-mono text-[10px] tracking-[0.2em] uppercase leading-relaxed"
          style={{ color: "#2A2A28" }}
        >
          [AVAILABLE FOR PLACEMENT]
          <br />
          [HYDERABAD · INDIA]
        </p>
      </div>

      {/* Scroll indicator — untouched */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "var(--app-font-body)",
            color: "var(--text-muted)",
            letterSpacing: "0.18em",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "var(--text-muted)" }}
        >
          <ChevronDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
