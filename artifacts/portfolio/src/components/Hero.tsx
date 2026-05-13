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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start text-left px-6 md:pl-[80px] w-full">
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
              Open to Work · Creative AI Roles
            </span>
          </motion.div>

          {/* Label — replaces name intro */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "#F5A623", marginBottom: "-8px" }}
          >
            CREATIVE TECHNOLOGIST
          </motion.p>

          {/* Headline — 3-line manifesto */}
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
            Design. AI. Internet culture.{" "}
            <span style={{ color: "rgba(245,166,35,0.6)" }}>—</span>{" "}
            I speak all three fluently.
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
              href="/resume.pdf"
              download
              className="group inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-medium transition-all duration-200 border border-[rgba(255,255,255,0.12)] text-[#666664] bg-transparent hover:border-[rgba(255,255,255,0.3)] hover:text-[#F0F0EC]"
              style={{ fontFamily: "var(--app-font-body)" }}
            >
              Download Resume
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
            40K+ Followers
            <span style={{ color: "rgba(245,166,35,0.5)", margin: "0 6px" }}>·</span>
            5M+ Views
            <span style={{ color: "rgba(245,166,35,0.5)", margin: "0 6px" }}>·</span>
            AI Projects
            <span style={{ color: "rgba(245,166,35,0.5)", margin: "0 6px" }}>·</span>
            DevCatalyst Lead
          </motion.p>
        </motion.div>
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
