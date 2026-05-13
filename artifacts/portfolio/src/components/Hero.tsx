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
              "radial-gradient(circle, rgba(245,166,35,0.18) 0%, rgba(245,166,35,0.04) 60%, transparent 100%)",
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
          {/* 1. Badge */}
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

          {/* 2. Name intro */}
          <motion.div variants={itemVariants}>
            <p
              className="text-base md:text-lg font-medium"
              style={{
                fontFamily: "var(--app-font-body)",
                color: "var(--text-secondary)",
                borderLeft: "2px solid var(--brand)",
                paddingLeft: "12px",
                textAlign: "left",
              }}
            >
              Hey, I'm Ajay Puttam
            </p>
          </motion.div>

          {/* 3. Manifesto headline — 2 lines */}
          <div className="flex flex-col items-center">
            <motion.h1
              variants={itemVariants}
              className="leading-none tracking-tight"
              style={{
                fontFamily: "var(--app-font-display)",
                fontWeight: 800,
                fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.0,
              }}
            >
              I build where creativity
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="leading-none tracking-tight"
              style={{
                fontFamily: "var(--app-font-display)",
                fontWeight: 800,
                fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.0,
              }}
            >
              meets{" "}
              <span style={{ color: "var(--brand)" }}>intelligence.</span>
            </motion.h1>
          </div>

          {/* 4. Sub-headline */}
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

          {/* 5. CTAs */}
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
                color: "#ffffff",
                boxShadow: "0 0 0 0 rgba(245,166,35,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 24px 6px rgba(245,166,35,0.45)";
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
              className="group inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-medium transition-all duration-300"
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
              <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* 6. Social proof */}
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-wide text-center"
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

        {/* 7. Location line — static, no animation */}
        <p
          className="mt-8 text-xs tracking-widest uppercase text-center"
          style={{
            fontFamily: "var(--app-font-body)",
            color: "var(--text-muted)",
            opacity: 0.6,
            letterSpacing: "0.18em",
          }}
        >
          Based in Hyderabad, India · Available for global remote roles
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
