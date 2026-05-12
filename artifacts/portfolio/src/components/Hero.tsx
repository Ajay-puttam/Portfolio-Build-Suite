import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const HEADLINE_LINES = ["Creative.", "Technical.", "AI-Native."];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          style={{
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(245,166,35,0.12) 0%, rgba(245,166,35,0.03) 60%, transparent 100%)",
            filter: "blur(60px)",
            transform: "translateY(-60px)",
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(var(--surface-border) 1px, transparent 1px), linear-gradient(90deg, var(--surface-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 w-full"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
              style={{
                fontFamily: "var(--app-font-body)",
                backgroundColor: "rgba(245, 166, 35, 0.1)",
                border: "1px solid rgba(245, 166, 35, 0.3)",
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
              Available for creative AI roles
            </span>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col items-center">
            {HEADLINE_LINES.map((line, i) => (
              <motion.h1
                key={line}
                variants={itemVariants}
                custom={i}
                className="leading-none tracking-tight"
                style={{
                  fontFamily: "var(--app-font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
                  color: "var(--text-primary)",
                  lineHeight: 1.0,
                }}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          {/* Subheadline */}
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
            I build at the intersection of AI, design, and internet culture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: "var(--app-font-body)",
                backgroundColor: "var(--brand)",
                color: "#0C0B08",
                fontWeight: 600,
                boxShadow: "0 0 0 0 rgba(245,166,35,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 32px rgba(245,166,35,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 0 0 rgba(245,166,35,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: "var(--app-font-body)",
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--surface-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--brand)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--surface-border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
              }}
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
